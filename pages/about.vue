<template>
  <div class="container">
    <CBox v-bind="mainStyles[colorMode]" w="100vw" h="100vh" flex-dir="column">
      <CHeader />

      <div class="CContent">
        <CHeading as="h1" size="2xl" text-align="center" mb="2">
          About Me
        </CHeading>
        <br />

        <CText fontSize="lg" text-align="center">
          Working full time in Laravel, Vue y Bulma, leading the team of <br />
          development of the T-CUida ecosystem. Also experienced with Dart,
          <br />
          NodeJS, C#.
        </CText>
        <br />

        <CHeading as="h5" size="md" text-align="center" mb="2">
          Think, Document, Design, Code, Deploy, Re-Document. This is the flow,
          my flow.
        </CHeading>
        <br />

        <CText fontSize="lg" text-align="center">
          I really like to enjoy coding and thinking about code. <br>
          I want to create things that are useful to others and that last over time.
        </CText>
        <br />

        <CHeading as="h3" size="lg" text-align="center">
          Want to build something?
        </CHeading>
        <br />

        <CText fontSize="lg" text-align="center">
          If you want to work with me just shoot me an email and <br />
          I'll be ready to make it happen.
        </CText>
        <br />

        <CHeading as="h3" size="lg" text-align="center"> Skills </CHeading>
        <br />

        <CText fontSize="lg" text-align="center">
          - PHP. <br />
          - Laravel. <br />
          - Vue. <br />
          - JavaScript. <br />
          - Etc... <br>
        </CText>
      </div>
    </CBox>
  </div>
</template>

<script lang="js">
import {
  CBox,
  CHeading,
  CText
} from '@chakra-ui/vue'
import CHeader from '~/components/Scaffold/CHeader.vue'

export default {
  name: 'AboutPage',
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
