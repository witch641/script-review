import { createStore } from 'vuex'

// 从 localStorage 获取保存的数据
const savedRecords = localStorage.getItem('gameRecords')
const initialRecords = savedRecords ? JSON.parse(savedRecords) : []

export default createStore({
  state: {
    records: initialRecords,  // 使用保存的数据初始化
    searchQuery: ''
  },
  getters: {
    filteredRecords: (state) => {
      const query = state.searchQuery?.toLowerCase() || '';
      if (!query) return state.records;
      
      return state.records.filter(record => {
        const searchableFields = [
          String(record.gameName || ''),
          String(record.mood || ''),
          String(record.players || ''),
          String(record.participants || ''),
          String(record.keyPoints || ''),
          String(record.summary || '')
        ].map(field => field.toLowerCase());

        return searchableFields.some(field => field.includes(query));
      });
    },
    getRecordById: (state) => (id) => {
      return state.records.find(record => String(record.id) === String(id)) || null;
    }
  },
  mutations: {
    setSearchQuery(state, query) {
      state.searchQuery = query || '';
    },
    addRecord(state, record) {
      const newRecord = {
        id: Date.now().toString(),
        gameTime: new Date().toISOString(),
        gameName: record.gameName || '',
        mood: record.mood || '',
        playerCount: record.playerCount || 0,
        participants: record.participants || '',
        keyPoints: record.keyPoints || '',
        summary: record.summary || '',
        ...record
      };
      state.records.push(newRecord);
      localStorage.setItem('gameRecords', JSON.stringify(state.records));
    },
    deleteRecord(state, id) {
      const index = state.records.findIndex(record => record.id === id);
      if (index !== -1) {
        state.records.splice(index, 1);
        localStorage.setItem('gameRecords', JSON.stringify(state.records));
      }
    },
    updateRecord(state, updatedRecord) {
      const index = state.records.findIndex(record => record.id === updatedRecord.id)
      if (index !== -1) {
        state.records[index] = { ...state.records[index], ...updatedRecord }
        localStorage.setItem('gameRecords', JSON.stringify(state.records));
      }
    }
  },
  actions: {
    updateRecord({ commit }, recordData) {
      commit('updateRecord', recordData)
    }
  }
})
