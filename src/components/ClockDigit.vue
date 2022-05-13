<template>
    <span class="clock-digit_wrapper">
        <span class="clock-digit_placeholder">8</span>

        <span class="clock-digit_time">{{ digit }}</span>
    </span>
</template>

<script>
export default {
    name: 'ClockDigit',

    props: {
        digit: {
            type: String,
            required: true,
        },
    },

    computed: {
        first() {
            return this.digits.split()[0]
        },

        second() {
            return this.digits.split()[1]
        },
    },
}
</script>

<style lang="scss" scoped>
.clock-digit_placeholder {
    color: #f3f4f6;
}

.clock-digit_time {
    color: #374151;
    position: absolute;
    right: 0;
}
</style>
