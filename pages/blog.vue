<template>
  <div class="container">
    <CBox v-bind="mainStyles[colorMode]" w="100vw" h="100vh" flex-dir="column">
      <CHeader />

      <div class="CContent">
        <CHeading as="h1" size="2xl" text-align="center" mb="2">
          Blog
        </CHeading>
        <br />

        <CText font-size="lg" text-align="center">
          - Entry 1. <br />
          - Entry 2. <br />
          - Entry 3. <br />
          - Entry 4. <br />
          - Entry 5. <br />
        </CText>
        <br />
      </div>
    </CBox>
  </div>
</template>

<script lang="js">
import {
  CBox,
  CHeading,
  CText,
} from '@chakra-ui/vue'
import CHeader from '~/components/Scaffold/CHeader.vue'

export default {
  name: 'BlogPage',
  components: {
    CBox,
    CHeading,
    CText,
    //
    CHeader
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
.CContent {
  padding: 2rem 5rem;
  font-size: 1.25rem;
}
</style>
