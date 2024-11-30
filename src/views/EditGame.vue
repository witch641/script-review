<template>
  <div class="edit-game">
    <h2>编辑记录</h2>
    <GameForm 
      v-if="game"
      :initial-data="game"
      @submit="updateGame"
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
      game: null
    }
  },
  created() {
    const gameId = parseInt(this.$route.params.id)
    this.game = this.$store.state.games.find(g => g.id === gameId)
    if (!this.game) {
      this.$router.push('/')
    }
  },
  methods: {
    updateGame(updatedGame) {
      this.$store.dispatch('updateGame', {
        ...updatedGame,
        id: this.game.id
      })
      this.$router.push('/')
    }
  }
}
</script> 