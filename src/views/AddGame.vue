<template>
  <div class="add-game">
    <h2>添加记录</h2>
    <GameForm @submit="addGame" />
  </div>
</template>

<script>
import GameForm from '@/components/GameForm.vue'

export default {
  components: {
    GameForm
  },
  methods: {
    addGame(gameData) {
      this.$store.dispatch('addGame', gameData)
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