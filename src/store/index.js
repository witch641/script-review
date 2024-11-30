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
    }
  }
})
