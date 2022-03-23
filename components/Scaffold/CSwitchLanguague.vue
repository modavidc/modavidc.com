<template>
  <CBox mb="3">
    <CButton mr="3" @click="toggleLanguage">
      <img
        :src="language === 'ES' ? '/ES.webp' : '/US.webp'"
        :alt="`Switch to ${language === 'ES' ? 'ES' : 'EN'}`"
      />
    </CButton>
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
  data () {
    return {
      language: 'ES',
      languages: ['ES', 'EN'],
    }
  },
  methods: {
    toggleLanguage() {
      this.language = (this.language === 'ES') ? 'EN': 'ES';

      alert('Language to ' + this.language);
    }
  }
}
</script>
