<template>
  <div id="app" class="app-container">
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.app-container {
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .app-container {
    padding: 10px;
  }
}
</style> 