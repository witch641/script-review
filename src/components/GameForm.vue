<template>
  <div class="game-form">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label>游戏名称</label>
        <input v-model="gameData.gameName" required>
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
        <input type="datetime-local" v-model="gameData.gameTime" required>
      </div>

      <div class="form-group">
        <label>玩家人数</label>
        <input 
          type="number" 
          v-model.number="gameData.playerCount"
          min="0"
          required
        >
      </div>

      <div class="form-group">
        <label>参与者</label>
        <input v-model="gameData.participants" placeholder="用逗号分隔玩家姓名">
      </div>

      <div class="form-group">
        <label>关键线索</label>
        <textarea v-model="gameData.keyPoints" rows="4"></textarea>
      </div>

      <div class="form-group">
        <label>复盘总结</label>
        <textarea v-model="gameData.summary" rows="4"></textarea>
      </div>

      <button type="submit">{{ isEditing ? '保存记录' : '保存' }}</button>
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
        gameName: '',
        mood: '开心',
        gameTime: this.formatDateForInput(new Date()),
        playerCount: 0,
        participants: '',
        keyPoints: '',
        summary: ''
      }
    }
  },
  created() {
    if (this.initialData) {
      this.gameData = {
        gameName: this.initialData.gameName || '',
        mood: this.initialData.mood || '开心',
        gameTime: this.formatDateForInput(new Date(this.initialData.gameTime)),
        playerCount: Number(this.initialData.playerCount) || 0,
        participants: this.initialData.participants || '',
        keyPoints: this.initialData.keyPoints || '',
        summary: this.initialData.summary || ''
      }
    }
  },
  watch: {
    initialData: {
      handler(newVal) {
        if (newVal) {
          this.gameData = {
            gameName: newVal.gameName || '',
            mood: newVal.mood || '开心',
            gameTime: this.formatDateForInput(new Date(newVal.gameTime)),
            playerCount: Number(newVal.playerCount) || 0,
            participants: newVal.participants || '',
            keyPoints: newVal.keyPoints || '',
            summary: newVal.summary || ''
          }
        }
      },
      deep: true
    }
  },
  methods: {
    formatDateForInput(date) {
      if (!date || isNaN(date.getTime())) return '';
      
      // 格式化为 YYYY-MM-DDThh:mm
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    },
    submitForm() {
      const formData = {
        ...this.gameData,
        playerCount: Number(this.gameData.playerCount) || 0,
        gameTime: new Date(this.gameData.gameTime).toISOString()
      };
      this.$emit('submit', formData)
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