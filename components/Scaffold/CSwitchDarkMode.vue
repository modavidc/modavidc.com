<template>
  <CBox mb="3">
    <CIconButton
      mr="3"
      :icon="colorMode === 'light' ? 'moon' : 'sun'"
      :aria-label="`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`"
      @click="toggleColorMode"
    />
  </CBox>
</template>

<script lang="js">
import {
  CBox,
  CIconButton,
} from '@chakra-ui/vue'

export default {
  name: 'CSwitchDarkMode',
  components: {
    CBox,
    CIconButton,
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
