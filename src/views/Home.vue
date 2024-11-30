<template>
  <div class="home">
    <div class="title-container">
      <h1 class="title">剧本杀复盘记录</h1>
      <div class="title-decoration"></div>
    </div>
    
    <transition name="fade">
      <SearchBar @search="handleSearch" class="search-section" />
    </transition>
    
    <div class="actions">
      <button class="add-btn" @click="showAddForm = true">
        <span class="btn-icon">+</span>
        <span class="btn-text">添加记录</span>
      </button>
    </div>
    
    <transition name="fade">
      <AddRecordForm v-if="showAddForm" @close="showAddForm = false" />
    </transition>
    
    <transition-group 
      name="slide-up" 
      tag="div" 
      class="records-list"
    >
      <GameRecord
        v-for="record in filteredRecords"
        :key="record.id"
        :record="record"
        @delete="deleteRecord"
      />
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SearchBar from '@/components/SearchBar.vue'
import GameRecord from '@/components/GameRecord.vue'
import AddRecordForm from '@/components/AddRecordForm.vue'

export default {
  name: 'HomePage',
  components: {
    SearchBar,
    GameRecord,
    AddRecordForm
  },
  data() {
    return {
      showAddForm: false
    }
  },
  computed: {
    ...mapGetters(['filteredRecords'])
  },
  methods: {
    handleSearch(query) {
      this.$store.commit('setSearchQuery', query)
    },
    deleteRecord(id) {
      this.$store.commit('deleteRecord', id)
    }
  }
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.title-container {
  position: relative;
  text-align: center;
  margin-bottom: 40px;
  perspective: 1000px;
}

.title {
  text-align: center;
  color: var(--card-bg);
  font-size: 2.5em;
  margin-bottom: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.911);

  position: relative;
  z-index: 2;
}

.title-decoration {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, 
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.2)
  );
  border-radius: 10px;
  filter: blur(8px);
  animation: decorationAnimation 8s ease-in-out infinite;
  z-index: 1;
}

@keyframes titleAnimation {
  0%, 100% { 
    transform: translateY(0) rotateX(0);
    letter-spacing: normal;
  }
  25% { 
    transform: translateY(-15px) rotateX(5deg);
    letter-spacing: 2px;
  }
  75% { 
    transform: translateY(5px) rotateX(-2deg);
    letter-spacing: 1px;
  }
}

@keyframes decorationAnimation {
  0%, 100% { 
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.5;
  }
  50% { 
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0.8;
  }
}

.search-section {
  margin-bottom: 30px;
  transform-origin: top;
}

.actions {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.add-btn {
  background: rgba(255, 255, 255, 0.9);
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1em;
  color: var(--gradient-end);
  transition: all var(--transition-speed);
  box-shadow: 0 4px 15px rgba(222, 98, 98, 0.2);
}

.add-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(222, 98, 98, 0.3);
  background: white;
}

.btn-icon {
  font-size: 1.2em;
  font-weight: bold;
}

.records-list {
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 20px 0;
}

@media (max-width: 768px) {
  .home {
    padding: 10px;
  }

  .title {
    font-size: 2em;
    margin-bottom: 20px;
  }

  .records-list {
    grid-template-columns: 1fr;
  }
}
</style> 