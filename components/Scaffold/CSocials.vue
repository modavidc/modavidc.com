<template>
  <CBox mb="3">
    <a href="https://github.com/modavidc" target="_blank">
      <CIcon name="github" color="black.500" size="24px" />
    </a>
    <a href="mailto:moisesdavidaaron@gmail.com" target="_blank">
      <CIcon name="email" color="red.500" size="24px" />
    </a>
    <a href="https://twitter.com/modavidc" target="_blank">
      <CIcon name="twitter" color="blue.400" size="24px" />
    </a>
    <a href="https://linkedin.com/" target="_blank">
      <CIcon name="linkedin" color="blue.500" size="24px" />
    </a>
  </CBox>
</template>

<script lang="js">
import { CIcon } from '@chakra-ui/vue'

export default {
  name: 'CSocials',
  components: {
    CIcon
  }
}
</script>
