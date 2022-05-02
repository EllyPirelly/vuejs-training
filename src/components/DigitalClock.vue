<template>
    <div class="digiclock-wrapper">
        <span class="digiclock-v1">
              <span>{{ hours }}</span>
              <span>:</span>
              <span>{{ minutes }}</span>
              <span>:</span>
              <span>{{ seconds }}</span>
        </span>
    </div>
</template>

<script>
const date = new Date()

export default {
    name: '',

    data() {
        return {
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds(),
            timer: undefined
        }
    },

    methods: {
        setDateTime() {
            const date = new Date()
            this.hours = this.setLeadingZero(date.getHours())
            this.minutes = this.setLeadingZero(date.getMinutes())
            this.seconds = this.setLeadingZero(date.getSeconds())
        },

        setLeadingZero(leadingZero) {
            return leadingZero < 10 ? `0${leadingZero}` : leadingZero
        }
    },

    beforeMount() {
        this.timer = setInterval(this.setDateTime, 1000)
    },

    beforeUnmount() {
        clearInterval(this.timer)
    }
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
