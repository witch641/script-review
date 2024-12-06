import { createStore } from 'vuex'

export default createStore({
  state: {
    records: [],
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
    getGameById: (state) => (id) => {
      return state.games.find(game => game.id === id)
    },
    getRecordById: (state) => (id) => {
      return state.records.find(record => record.id === String(id))
    }
  },
  mutations: {
    setSearchQuery(state, query) {
      state.searchQuery = query || '';
    },
    addRecord(state, record) {
      const newRecord = {
        id: Date.now(),
        gameTime: new Date().toISOString(),
        gameName: record.gameName || '',
        mood: record.mood || '',
        players: record.players || '',
        participants: record.participants || '',
        keyPoints: record.keyPoints || '',
        summary: record.summary || '',
        ...record
      };
      state.records.push(newRecord);
    },
    deleteRecord(state, id) {
      const index = state.records.findIndex(record => record.id === id);
      if (index !== -1) {
        state.records.splice(index, 1);
      }
    },
    UPDATE_GAME(state, gameData) {
      const index = state.games.findIndex(game => game.id === gameData.id)
      if (index !== -1) {
        state.games[index] = { ...state.games[index], ...gameData }
      }
    },
    updateRecord(state, updatedRecord) {
      const index = state.records.findIndex(record => record.id === updatedRecord.id)
      if (index !== -1) {
        state.records[index] = { ...state.records[index], ...updatedRecord }
      }
    }
  },
  actions: {
    updateGame({ commit }, gameData) {
      commit('UPDATE_GAME', gameData)
    },
    updateRecord({ commit }, recordData) {
      commit('updateRecord', recordData)
    }
  }
})
