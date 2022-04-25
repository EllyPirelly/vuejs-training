<template>
  <div class="about">
    <h1>Digital Clock</h1>
    <p>Enter witty text here.</p>
    <DigitalClock />
  </div>
</template>

<script>
import DigitalClock from '../components/DigitalClock.vue'

export default {
  name: 'Clock',

  components: {
    DigitalClock,
  },

  data() {
    return {
      //
    }
  },

  methods: {
    //
  },
}
</script>

<style lang="scss">
//
</style>
