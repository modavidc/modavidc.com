<template>
  <header v-bind="mainStyles[colorMode]" class="CHeader">
    <CNavBar />

    <div style="display: flex">
      <CSocials />
      <CSwitchDarkMode />
      <CSwitchLanguague />
    </div>
  </header>
</template>

<script lang="js">
import CNavBar from '~/components/Scaffold/CNavBar.vue'
import CSwitchDarkMode from '~/components/Scaffold/CSwitchDarkMode.vue'
import CSwitchLanguague from '~/components/Scaffold/CSwitchLanguague.vue'
import CSocials from '~/components/Scaffold/CSocials.vue'

export default {
  name: 'CHeader',
  components: {
    CNavBar,
    CSwitchDarkMode,
    CSwitchLanguague,
    CSocials
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
   data () {
    return {
      showModal: false,
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light: {
          bg: 'white',
          color: 'gray.900'
        }
      }
    }
  },
  computed: {
    colorMode () {
      return this.$chakraColorMode()
    },
    theme () {
      return this.$chakraTheme()
    },
    toggleColorMode () {
      return this.$toggleColorMode
    }
  },
}
</script>

<style scoped>
.CHeader {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
