<template>
    <div class="digiclock-wrapper">
        <span class="digiclock-v1">
            <span class="clock-digit_wrapper">
                <span class="clock-digit_placeholder">8</span>

                <span class="clock-digit_time">{{ hours.split('')[0] }}</span>
            </span>

            <span class="clock-digit_wrapper">
                <span class="clock-digit_placeholder">8</span>

                <span class="clock-digit_time">{{ hours.split('')[1] }}</span>
            </span>

            <span>:</span>

            <span class="clock-digit_wrapper">
                <span class="clock-digit_placeholder">8</span>

                <span class="clock-digit_time">{{ minutes.split('')[0] }}</span>
            </span>

            <span class="clock-digit_wrapper">
                <span class="clock-digit_placeholder">8</span>

                <span class="clock-digit_time">{{ minutes.split('')[1] }}</span>
            </span>

            <span>:</span>

            <span class="clock-digit_wrapper">
                <span class="clock-digit_placeholder">8</span>

                <span class="clock-digit_time">{{ seconds.split('')[0] }}</span>
            </span>

            <span class="clock-digit_wrapper">
                <span class="clock-digit_placeholder">8</span>

                <span class="clock-digit_time">{{ seconds.split('')[1] }}</span>
            </span>
        </span>
    </div>
</template>

<script>
import ClockDigit from '@/components/ClockDigit'

export default {
    name: '',

    components: [ClockDigit],

    data() {
        return {
            hours: '00',
            minutes: '00',
            seconds: '00',
            timer: undefined,
        }
    },

    methods: {
        setDateTime() {
            const date = new Date()
            this.hours = this.setLeadingZero(date.getHours().toString())
            this.minutes = this.setLeadingZero(date.getMinutes().toString())
            this.seconds = this.setLeadingZero(date.getSeconds().toString())
        },

        setLeadingZero(digit) {
            return digit.length < 2 ? `0${digit}` : digit
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
    border: 2px solid #374151;
    border-radius: 8px;
    font-family: 'digital-7regular', monospace;
    font-size: 9rem;
    line-height: 1em;
    margin-top: 1rem;
    padding: 0 2rem;
}

.clock-digit_wrapper {
    position: relative;
}

.clock-digit_placeholder {
    color: #f3f4f6;
}

.clock-digit_time {
    color: #374151;
    position: absolute;
    right: 0;
}
</style>
