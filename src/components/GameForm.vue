<template>
  <div class="game-form">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label>游戏名称</label>
        <input v-model="gameData.name" required>
      </div>
      
      <div class="form-group">
        <label>心情</label>
        <select v-model="gameData.mood">
          <option>开心</option>
          <option>紧张</option>
          <option>沮丧</option>
          <option>如坐针毡</option>
          <option>收获颇丰</option>
        </select>
      </div>

      <div class="form-group">
        <label>游戏时间</label>
        <input type="datetime-local" v-model="gameData.playTime" required>
      </div>

      <div class="form-group">
        <label>玩家人数</label>
        <input type="number" v-model="gameData.playerCount" required>
      </div>

      <div class="form-group">
        <label>参与者姓名</label>
        <input v-model="gameData.players" placeholder="用逗号分隔玩家姓名">
      </div>

      <div class="form-group">
        <label>关键线索</label>
        <textarea v-model="gameData.clues" rows="4"></textarea>
      </div>

      <div class="form-group">
        <label>复盘总结</label>
        <textarea v-model="gameData.summary" rows="4"></textarea>
      </div>

      <button type="submit" >{{ isEditing ? '保存修改' : '保存修改' }}</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    initialData: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      gameData: {
        name: '',
        mood: '开心',
        playTime: '',
        playerCount: 0,
        players: '',
        clues: '',
        summary: ''
      }
    }
  },
  created() {
    if (this.initialData) {
      this.gameData = { ...this.initialData }
    }
  },
  methods: {
    submitForm() {
      this.$emit('submit', this.gameData)
    }
  }
}
</script>

<style scoped>
.game-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input, select, textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  background: linear-gradient(135deg, #d29fc3, #FAD0C4);
  color: var(--text-secondary);
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  transition: all var(--transition-speed);
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
</style> 