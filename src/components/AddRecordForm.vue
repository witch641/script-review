<template>
  <div class="form-overlay">
    <div class="form-container">
      <h2>{{ isEditing ? '编辑记录' : '添加记录' }}</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label>游戏名称：</label>
          <input type="text" v-model="form.gameName" required>
        </div>

        <div class="form-group">
          <label>游戏时间：</label>
          <input type="datetime-local" v-model="form.gameTime" required>
        </div>

        <div class="form-group">
          <label>心情：</label>
          <select v-model="form.mood" required>
            <option value="">请选择心情</option>
            <option value="开心">开心</option>
            <option value="收获颇丰">收获颇丰</option>
            <option value="紧张">紧张</option>
            <option value="如坐针毡">如坐针毡</option>
            <option value="沮丧">沮丧</option>
            
            
          </select>
        </div>

        <div class="form-group">
          <label>玩家人数：</label>
          <input type="number" v-model.number="form.players" required min="1">
        </div>

        <div class="form-group">
          <label>参与者姓名：</label>
          <input type="text" v-model="form.participants" placeholder="请用逗号分隔多个参与者">
        </div>

        <div class="form-group">
          <label>关键线索：</label>
          <textarea v-model="form.keyPoints" rows="4"></textarea>
        </div>

        <div class="form-group">
          <label>复盘总结：</label>
          <textarea v-model="form.summary" rows="6"></textarea>
        </div>

        <div class="form-actions">
          <button type="submit" class="submit-btn">{{ isEditing ? '保存修改' : '添加记录' }}</button>
          <button type="button" class="cancel-btn" @click="$emit('close')">取消</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddRecordForm',
  props: {
    editRecord: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      form: {
        gameName: '',
        gameTime: this.formatDateForInput(new Date()),
        mood: '',
        players: '',
        participants: '',
        keyPoints: '',
        summary: ''
      }
    }
  },
  computed: {
    isEditing() {
      return !!this.editRecord;
    }
  },
  methods: {
    formatDateForInput(date) {
      return new Date(date).toISOString().slice(0, 16);
    },
    submitForm() {
      const formData = {
        ...this.form,
        gameTime: new Date(this.form.gameTime).toISOString()
      };
      
      if (this.isEditing) {
        this.$store.commit('updateRecord', {
          id: this.editRecord.id,
          ...formData
        });
      } else {
        this.$store.commit('addRecord', formData);
      }
      
      this.$emit('close');
      this.resetForm();
    },
    resetForm() {
      this.form = {
        gameName: '',
        gameTime: this.formatDateForInput(new Date()),
        mood: '',
        players: '',
        participants: '',
        keyPoints: '',
        summary: ''
      };
    }
  },
  created() {
    if (this.editRecord) {
      this.form = {
        ...this.editRecord,
        gameTime: this.formatDateForInput(new Date(this.editRecord.gameTime))
      };
    }
  }
}
</script>

<style scoped>
.form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.form-container {
  background: white;
  padding: 25px;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #2c3e50;
}

input, select, textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

input:focus, select:focus, textarea:focus {
  border-color: #3498db;
  outline: none;
}

textarea {
  resize: vertical;
}

.form-actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 20px;
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.submit-btn {
  background: #3498db;
  color: white;
}

.cancel-btn {
  background: #e74c3c;
  color: white;
}

button:hover {
  opacity: 0.9;
}

@media (max-width: 768px) {
  .form-container {
    width: 95%;
    padding: 15px;
  }
}
</style> 