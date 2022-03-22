<template>
  <div class="container">
    <!-- Header -->
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/stack">Stack</a>
        <a href="/achievements">Achievements</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>

    <CBox
      v-bind="mainStyles[colorMode]"
      d="flex"
      w="100vw"
      h="100vh"
      flex-dir="column"
      justify-content="center"
    >
      <CHeading text-align="center" mb="4">Achievements Page</CHeading>
    </CBox>
  </div>
</template>

<script lang="js">
export default {
  name: 'AchievementsPage',
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
