<template>
    <div class="digiclock-wrapper">
        <span class="digiclock-v1">
            <clock-digit :digit="hours.split('')[0]" />

            <clock-digit :digit="hours.split('')[1]" />

            <span>:</span>

            <clock-digit :digit="minutes.split('')[0]" />

            <clock-digit :digit="minutes.split('')[1]" />

            <span>:</span>

            <clock-digit :digit="seconds.split('')[0]" />

            <clock-digit :digit="seconds.split('')[1]" />
        </span>
    </div>

    <div class="timer-wrapper">
        <input class="timer-time"
               :class="{ 'timer-time--set': alarm.length !== 0 }"
               ref="alarm"
               type="time"
               value="00:00">

        <button class="timer-set" type="button" @click="setAlarm()">Set</button>
    </div>

    <div class="action-wrapper" v-if="activeAlarm">
        <button class="timer-action timer-action__snooze" type="button" @click="snoozeAlarm()">
            Snooze
        </button>

        <button class="timer-action timer-action__stop" type="button" @click="stopAlarm()">
            Stop
        </button>
    </div>
</template>

<script>
import ClockDigit from '@/components/ClockDigit'

export default {
    name: '',

    components: {
        ClockDigit
    },

    data() {
        return {
            hours: '00',
            minutes: '00',
            seconds: '00',
            timer: undefined,
            alarm: [],
            alarmSound: undefined,
            activeAlarm: false,
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

        setAlarm() {
            this.alarm.push(this.$refs.alarm.value)
        },

        checkAlarm() {
            const currentTime = `${ this.hours }:${ this.minutes }`

            if (this.alarm.includes(currentTime)) {
                this.activeAlarm = true
                this.alarm = this.alarm.filter(item => item !== `${ this.hours }:${ this.minutes }`)
                this.alarmSound.play()
                this.alarmSound.loop = true
            }
        },

        snoozeAlarm() {
            this.alarmSound.pause()
            let newDate = new Date()
            newDate = this.addMinutes(newDate, 9)
            const newAlarm = `${this.setLeadingZero(newDate.getHours())}:${this.setLeadingZero(newDate.getMinutes())}`
            this.alarm.push(newAlarm)
            this.$refs.alarm.value = newAlarm
            this.activeAlarm = false
        },

        stopAlarm() {
            this.alarmSound.pause()
            this.$refs.alarm.value = '00:00'
            this.activeAlarm = false
        },

        addMinutes(date, minutes) {
            date.setMinutes(date.getMinutes() + minutes)
            return date
        },

        addHours(date, hours) {
            date.setHours(date.getHours() + hours)
            return date
        },
    },

    mounted() {
        this.alarmSound = new Audio('/sounds/alarm-clock.mp3')
    },

    beforeMount() {
        this.timer = setInterval(() => {
            this.setDateTime()
            this.checkAlarm()
        }, 1000)
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

.timer-wrapper {
    display: flex;
    margin: 5rem auto 0 auto;
    width: fit-content;
}

.timer-time {
    border: 1px solid #374151;
    border-radius: 8px 0 0 8px;
    font-family: 'digital-7regular', monospace;
    font-size: 4rem;
    padding: 0 1rem;

    &--set {
        background-color: #22c55e;
    }
}

.timer-set {
    border: 1px solid #374151;
    border-left-width: 0;
    border-radius: 0 8px 8px 0;
    font-family: 'digital-7regular', monospace;
    font-size: 4rem;
    padding: 0 1rem;
}

.timer-action {
    border: 0;
    border-radius: .25rem;
    font-family: 'digital-7regular', monospace;
    font-size: 3rem;
    margin-top: 3rem;
    padding: 0.5rem 2rem;

    & + & {
        margin-left: 1rem;
    }
}

.timer-action__snooze {
    background: #0284c7;
    color: #f0f9ff;

    &:hover,
    &:active,
    &:focus {
        background: #1d4ed8;
    }
}

.timer-action__stop {
    background: #dc2626;
    color: #fef2f2;

    &:hover,
    &:active,
    &:focus {
        background: #b91c1c;
    }
}
</style>
