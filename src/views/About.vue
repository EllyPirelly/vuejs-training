<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
      cumque, quasi eligendi tenetur error voluptate doloremque tempora totam
      saepe id debitis incidunt mollitia quos maxime eveniet numquam molestiae
      deserunt iure?
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium,
      animi nisi. Perferendis a voluptatem deserunt. Iste, tenetur tempore!
      Quasi velit iusto numquam facere ratione eum pariatur quaerat neque vitae
      sed.
    </p>
    <BaseButton />
  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue'

export default {
  name: 'About',

  components: {
    BaseButton,
  },

  methods: {
    //
  },

  data() {
    return {
      //
    }
  },
}
</script>

<style lang="scss">
//
</style>
