<template>
  <nav class="CNavBar">
    <CLogo />
    <CNavBarMenu />
  </nav>
</template>

<script lang="js">
import CLogo from '~/components/Scaffold/CLogo.vue'
import CNavBarMenu from '~/components/Scaffold/CNavBarMenu.vue'

export default {
  name: 'CNavBar',
  components: {
    CLogo,
    CNavBarMenu
  },
}
</script>

<style scoped>
.CNavBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
</style>
