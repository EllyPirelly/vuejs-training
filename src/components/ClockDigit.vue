<template>
    <span class="clock-digit_wrapper">
        <span class="clock-digit_placeholder">
            <span>8</span>

            <span>8</span>
        </span>

        <span class="clock-digit_time">
            <span>{{ first }}</span>

            <span>{{ second }}</span>
        </span>
    </span>
</template>

<script>
export default {
    name: 'ClockDigit',

    props: {
        digits: {
            type: Number,
            required: true,
        },
    },

    computed: {
        first() {
            console.log('this.digits: ', this.digits)
            return this.digits.split()[0]
        },

        second() {
            return this.digits.split()[1]
        },
    },
}
</script>

<style lang="scss" scoped></style>
