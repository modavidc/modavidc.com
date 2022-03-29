<template>
  <CBox mb="3">
    <nuxt-link v-if="$i18n.locale === 'es'" :to="switchLocalePath('en')">
      <CButton mr="3">
        <img src="/US.webp" alt="Cambiar a Inglés" />
      </CButton>
    </nuxt-link>
    <nuxt-link v-if="$i18n.locale === 'en'" :to="switchLocalePath('es')">
      <CButton mr="3">
        <img src="/ES.webp" alt="Switch to Spanish" />
      </CButton>
    </nuxt-link>
  </CBox>
</template>

<script lang="js">
import {
  CBox,
  CButton,
} from '@chakra-ui/vue'

export default {
  name: 'CSwitchLanguague',
  components: {
    CBox,
    CButton,
  },
  computed: {
    languageTo () {
      return this.$i18n.locale === 'es' ? 'en' : 'es';
    },
  },
}
</script>
