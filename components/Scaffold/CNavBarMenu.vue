<template>
  <CBox v-bind="mainStyles[colorMode]">
    <a style="margin-right: 0.5rem" href="/">Home</a>
    <a style="margin-right: 0.5rem" href="/about">About</a>
    <a style="margin-right: 0.5rem" href="/contact">Contact</a>
    <a style="margin-right: 0.5rem" href="/blog" class="">Blog</a>
  </CBox>
</template>

<script lang="js">
import { CBox } from '@chakra-ui/vue'

export default {
  name: 'CNavBarMenu',
  components: {
    CBox
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
