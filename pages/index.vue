<template>
  <div class="container">
    <!-- Header -->
    <header style="padding: 10px; display: flex; align-items: center; justify-content: space-between">
      <nav style="display: flex; align-items: center; justify-content: space-between; gap: 12px">
        <a href="">
          <CAvatar
            style="width: 32px; height: 32px"
            name="Moisés Cedeño"
            alt="Moisés Cedeño"
            src="https://avatars.githubusercontent.com/u/22900340?v=4"
          >
          </CAvatar>
        </a>
        <a href="/">Home</a>
        <a href="#">About</a>
        <a href="#">Stack</a>
        <a href="#">Achievements</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
        <a href="#" class="">Blog</a>
      </nav>
      <CBox mb="3">
        <CIconButton
          mr="3"
          :icon="colorMode === 'light' ? 'moon' : 'sun'"
          :aria-label="`Switch to ${
            colorMode === 'light' ? 'dark' : 'light'
          } mode`"
          @click="toggleColorMode"
        />
      </CBox>
    </header>

    <CBox
      v-bind="mainStyles[colorMode]"
      d="flex"
      w="100vw"
      h="100vh"
      flex-dir="column"
      justify-content="center"
    >
      <p style="text-align: center">
        Hi, Space Cowboy! 👋🚀
      </p>
      <CHeading text-align="center" mb="2">
        I'm <span style="color: #1a72ff">Cedeño, Moisés Cedeño.</span></CHeading
      >
      <p style="text-align: center" mb="4">
        I'm a Full-Stack Senior Developer with more than five years of
        <br />
        experience in application development.
      </p>
      <CFlex justify="center" direction="column" align="center">
        <CAvatarGroup>
          <CAvatar
            style="width: 200px; height: 200px"
            name="Moisés Cedeño"
            alt="Moisés Cedeño"
            src="https://avatars.githubusercontent.com/u/22900340?v=4"
          >
            <CAvatarBadge size="1.0em" bg="green.500" />
          </CAvatar>
        </CAvatarGroup>
        <CButton left-icon="link" variant-color="blue" mt="3">
          Connect
        </CButton>
        <CModal :is-open="showModal">
          <CModalOverlay />
          <CModalContent>
            <CModalHeader>Are you sure?</CModalHeader>
            <CModalBody>Deleting user cannot be undone</CModalBody>
            <CModalFooter>
              <CButton @click="showModal = false"> Cancel </CButton>
              <CButton
                margin-left="3"
                variant-color="red"
                @click="showModal = false"
              >
                Delete User
              </CButton>
            </CModalFooter>
            <CModalCloseButton @click="showModal = false" />
          </CModalContent>
        </CModal>
      </CFlex>
    </CBox>
  </div>
</template>

<script lang="js">
import {
  CBox,
  CButton,
  CAvatarGroup,
  CAvatar,
  CAvatarBadge,
  CModal,
  CModalContent,
  CModalOverlay,
  CModalHeader,
  CModalFooter,
  CModalBody,
  CModalCloseButton,
  CIconButton,
  CFlex,
  CHeading
} from '@chakra-ui/vue'

export default {
  name: 'IndexPage',
  components: {
    CBox,
    CButton,
    CAvatarGroup,
    CAvatar,
    CAvatarBadge,
    CModal,
    CModalContent,
    CModalOverlay,
    CModalHeader,
    CModalFooter,
    CModalBody,
    CModalCloseButton,
    CIconButton,
    CFlex,
    CHeading,
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
  methods: {
    showToast () {
      this.$toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 10000,
        isClosable: true
      })
    }
  }
}
</script>

<style >
body p {
  font-size: 1rem;
}
nav a {
  padding: 1rem;
  transition-property: var(--chakra-transition-property-common);
  transition-duration: var(--chakra-transition-duration-fast);
  transition-timing-function: var(--chakra-transition-easing-ease-out);
  cursor: pointer;
  -webkit-text-decoration: none;
  text-decoration: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
  color: var(--chakra-colors-gray-600);
  padding: var(--chakra-space-2);
  font-size: var(--chakra-fontSizes-sm);
  font-weight: 500;
}
</style>
