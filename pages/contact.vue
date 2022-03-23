<template>
  <div class="container">
    <CBox v-bind="mainStyles[colorMode]" w="100vw" h="100vh" flex-dir="column">
      <CHeader />

      <div class="CContent">
        <CHeading as="h1" size="2xl" text-align="center" mb="2">
          Contact
        </CHeading>
        <br />

        <CText fontSize="lg" text-align="center">
          <CIcon name="email" size="32px" color="blue.500" />
          <CIcon name="phone" size="32px" color="blue.500" />
          <CIcon name="whatsapp" size="32px" color="blue.500" />
        </CText>
        <br />

        <CText fontSize="lg" text-align="center"> Here is a form :) </CText>
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
  CIcon,
} from '@chakra-ui/vue'
import CHeader from '~/components/Scaffold/CHeader.vue'

export default {
  name: 'ContactPage',
  components: {
    CBox,
    CHeading,
    CText,
    CIcon,
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
