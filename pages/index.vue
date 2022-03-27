<template>
  <div class="container">
    <CBox v-bind="mainStyles[colorMode]" w="100vw" h="100vh" flex-dir="column">
      <!-- Header -->
      <CHeader />

      <div>
        <p style="text-align: center">
          {{ $i18n.messages[$i18n.locale].welcome }}
        </p>
        <CHeading text-align="center" mb="2">
          {{ $i18n.messages[$i18n.locale].iam }}
          <span style="color: #1a72ff">{{
            $i18n.messages[$i18n.locale].names
          }}</span></CHeading
        >
        <p style="text-align: center" mb="4">
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
      </div>
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
  CFlex,
  CHeading
} from '@chakra-ui/vue'
import CHeader from '~/components/Scaffold/CHeader.vue'

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
    CFlex,
    CHeading,
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

<style>
body p {
  font-size: 2rem;
}
</style>
