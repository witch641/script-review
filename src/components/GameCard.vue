<template>
  <div class="game-card">
    <div class="card-header">
      <h3>{{ game.name }}</h3>
      <div class="mood-badge">{{ game.mood }}</div>
    </div>
    
    <div class="card-content">
      <p><strong>游戏时间：</strong>{{ formatDate(game.playTime) }}</p>
      <p><strong>玩家：</strong>{{ game.playerCount }}人</p>
      <p><strong>参与者：</strong>{{ game.players }}</p>
      <div class="clues">
        <strong>关键线索：</strong>
        <p>{{ game.clues }}</p>
      </div>
      <div class="summary">
        <strong>复盘总结：</strong>
        <p>{{ game.summary }}</p>
      </div>
    </div>

    <div class="card-actions">
      <button @click="$emit('edit', game)" class="edit-btn">编辑</button>
      <button @click="$emit('delete', game.id)" class="delete-btn">删除</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    game: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleString()
    }
  }
}
</script>

<style scoped>
.game-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background: white;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.mood-badge {
  background-color: #e0e0e0;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.9em;
}

.card-content > * {
  margin-bottom: 10px;
}

.clues, .summary {
  margin-top: 10px;
}

.card-actions {
  margin-top: 15px;
  display: flex;
  gap: 10px;
}

.edit-btn, .delete-btn {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.edit-btn {
  background-color: #2196F3;
  color: white;
}

.delete-btn {
  background-color: #f44336;
  color: white;
}
</style> 