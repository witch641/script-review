function formatDate(date) {
  if (!date) return '';
  try {
    const d = new Date(date);
    if (isNaN(d.getTime())) return 'Invalid Date';
    
    return d.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  } catch (e) {
    console.error('Date formatting error:', e);
    return '';
  }
}

<template>
  <div class="record-card">
    <div class="record-header">
      <h3 class="game-name">{{ record.gameName || '未命名游戏' }}</h3>
      <span class="mood-tag" :class="moodClass">{{ record.mood || '心情无' }}</span>
    </div>
    
    <div class="record-field">
      <span class="field-label">游戏时间：</span>
      <span>{{ formattedGameTime }}</span>
    </div>
    
    <div class="record-field">
      <span class="field-label">玩家人数：</span>
      <span>{{ record.players || '无' }}</span>
    </div>
    
    <div class="record-field">
      <span class="field-label">参与者：</span>
      <span>{{ record.participants || '无' }}</span>
    </div>
    
    <div class="record-field">
      <span class="field-label">关键线索：</span>
      <p class="multiline-text">{{ record.keyPoints || '无' }}</p>
    </div>
    
    <div class="record-field">
      <span class="field-label">复盘总结：</span>
      <p class="multiline-text">{{ record.summary || '无' }}</p>
    </div>
    
    <div class="record-actions">
      <button class="edit-btn" @click="handleEdit">编辑</button>
      <button class="delete-btn" @click="$emit('delete', record.id)">删除</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameRecord',
  props: {
    record: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedGameTime() {
      if (!this.record.gameTime) return '无时间';
      try {
        const date = new Date(this.record.gameTime);
        if (isNaN(date.getTime())) return '无时间';
        return date.toLocaleString('zh-CN', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
      } catch (e) {
        console.error('Date formatting error:', e);
        return '无时间';
      }
    },
    moodClass() {
      const moodClasses = {
        '开心': 'mood-happy',
        '紧张': 'mood-nervous',
        '沮丧': 'mood-sad',
        '如坐针毡': 'mood-anxious',
        '收获颇丰': 'mood-fulfilled'
      };
      return moodClasses[this.record.mood] || 'mood-default';
    }
  },
  methods: {
    handleEdit() {
      this.$router.push(`/edit/${this.record.id}`);
    }
  }
}
</script>

<style scoped>
.record-card {
  background: var(--card-bg);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transition: all var(--transition-speed);
  transform: translateZ(0);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.record-card:hover {
  transform: translateY(-5px) translateZ(0);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

.record-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(138, 43, 226, 0.1);
}

.game-name {
  margin: 0;
  color: #855c55;
  font-size: 1.3em;
  font-weight: bold;
}

.mood-tag {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: 500;
  transition: all var(--transition-speed);
  color: white;
}

.mood-happy { background: linear-gradient(135deg, #e6a9d0, hsl(316, 66%, 87%)); }
.mood-nervous { background: linear-gradient(135deg, #FFD93D, #FFA41B); }
.mood-sad { background: linear-gradient(135deg, #d3865c, #e5b5a0); }
.mood-anxious { background: linear-gradient(135deg, #f1e152, #cccd8ab5); }
.mood-fulfilled { background: linear-gradient(135deg,  #ec9699, #ecaeae); }

.record-field {
  margin-bottom: 15px;
  transition: all var(--transition-speed);
}

.record-field:hover {
  transform: translateX(5px);
}

.field-label {
  font-weight: 600;
  color: #0000008a;
  opacity: 0.8;
  margin-right: 8px;
}

.multiline-text {
  white-space: pre-wrap;
  margin: 8px 0;
  padding: 8px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  color: var(--text-secondary);
}

.record-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  opacity: 0;
  transform: translateY(10px);
  transition: all var(--transition-speed);
}

.record-card:hover .record-actions {
  opacity: 1;
  transform: translateY(0);
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  transition: all var(--transition-speed);
}

.edit-btn {
  background: linear-gradient(135deg, #f9c5a5, #f0b6eb);
  color: white;
}

.delete-btn {
  background: linear-gradient(135deg, #eb4f54, #FAD0C4);
  color: var(--text-secondary);
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .record-card {
    margin: 10px 0;
  }

  .record-actions {
    opacity: 1;
    transform: none;
  }
}
</style> 