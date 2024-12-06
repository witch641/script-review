<template>
  <div class="add-game">
    <h2>{{ isEditing ? '编辑记录' : '添加记录' }}</h2>
    <GameForm 
      v-if="formReady"
      @submit="handleSubmit"
      :initialData="editingRecord"
    />
  </div>
</template>

<script>
import GameForm from '@/components/GameForm.vue'

export default {
  components: {
    GameForm
  },
  data() {
    return {
      editingRecord: null,
      isEditing: false,
      formReady: false
    }
  },
  created() {
    const recordId = this.$route.params.id
    if (recordId) {
      this.isEditing = true
      this.editingRecord = this.$store.getters.getRecordById(recordId)
      
      // 如果找不到记录，返回首页
      if (!this.editingRecord) {
        this.$router.push('/')
        return
      }
    }
    this.formReady = true
  },
  methods: {
    handleSubmit(recordData) {
      if (this.isEditing) {
        this.$store.dispatch('updateRecord', {
          ...recordData,
          id: this.$route.params.id
        })
      } else {
        this.$store.commit('addRecord', recordData)
      }
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.add-game {
  padding: 20px;
}

h2 {
  margin-bottom: 20px;
}
</style> 