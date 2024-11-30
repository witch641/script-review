<template>
  <div class="search-container">
    <input 
      type="text" 
      v-model="searchQuery"
      @input="handleSearch"
      placeholder="搜索记录..."
      class="search-input"
    >
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchQuery: '',
      debounceTimer: null
    }
  },
  methods: {
    handleSearch() {
      if (this.debounceTimer) clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => {
        this.$emit('search', this.searchQuery);
      }, 300);
    }
  },
  beforeUnmount() {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
  }
}
</script>

<style scoped>
.search-container {
  margin-bottom: 20px;
}

.search-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.search-input:focus {
  outline: none;
  border-color: #3498db;
}
</style> 