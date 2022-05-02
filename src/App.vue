<template>
    <div id="nav">
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> -->

        <!-- works the same way as above! -->
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <span> | </span>
        <router-link :to="{ name: 'Clock' }">Clock</router-link>
    </div>
    <router-view/>
</template>

<style lang="scss">
#app {
    font-family: 'Bitter', serif;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#nav {
    padding: 30px;

    a {
        color: #2c3e50;
        font-weight: bold;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
