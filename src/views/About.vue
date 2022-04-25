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
    <br />
    <div class="digiclock-wrapper">
      <span class="testfont-monomono">12:30</span>
      <span class="testfont-regular">00:15</span>
    </div>
    <br />
    <p>
      Zwei Uhren um die unterschiedlichen Schriftschnitte mal einzubinden. Es
      sollte wenn nur eine genommen werden.
    </p>
  </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue'

export default {
  name: 'About',

  components: {
    BaseButton,
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
.digiclock-wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 16px;
}

.testfont-monomono,
.testfont-regular {
  border: 2px solid #000;
  border-radius: 8px;
  font-size: 42px;
  line-height: 1.5em;
  padding: 15px;
}

.testfont-monomono {
  font-family: 'digital-7_monomono', monospace;
}

.testfont-regular {
  font-family: 'digital-7regular', monospace;
}
</style>
