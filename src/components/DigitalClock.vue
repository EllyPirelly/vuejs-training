<template>
  <div class="digiclock-wrapper">
    <span class="digiclock-v1">
      <span>{{ dateTime.hours }}</span>
      <span>:</span>
      <span>{{ dateTime.minutes }}</span>
      <span>:</span>
      <span>{{ dateTime.seconds }}</span>
    </span>
  </div>
</template>

<script>
const date = new Date()

export default {
  name: '',

  data() {
    return {
      dateTime: {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      },
      timer: undefined,
    }
  },

  // TODO: have method less verbose

  methods: {
    setDateTime() {
      const date = new Date()
      this.dateTime = {
        hours: this.setHours(date),
        minutes: this.setMinutes(date),
        seconds: this.setSeconds(date),
      }
    },

    /*     setTime(date) {
      const seconds = date.getSeconds()
      const minutes = date.getMinutes()
      const hours = date.getHours()

      return { variable } < 10 ? `0${ variable }` : { variable }
    } */

    setSeconds(date) {
      const seconds = date.getSeconds()
      return seconds < 10 ? `0${seconds}` : seconds
    },

    setMinutes(date) {
      const minutes = date.getMinutes()
      return minutes < 10 ? `0${minutes}` : minutes
    },

    setHours(date) {
      const hours = date.getHours()
      return hours < 10 ? `0${hours}` : hours
    },
  },

  beforeMount() {
    this.timer = setInterval(this.setDateTime, 1000)
  },

  beforeUnmount() {
    clearInterval(this.timer)
  },
}
</script>

<style lang="scss">
.digiclock-wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 16px;
}

.digiclock-v1 {
  border: 2px solid #000;
  border-radius: 8px;
  font-family: 'digital-7regular', monospace;
  font-size: 42px;
  line-height: 1.5em;
  padding: 15px;
}
</style>
