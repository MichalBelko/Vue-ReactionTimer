<template>
  <p class="hs">
    Highscore: <strong>{{ highscore }}</strong>
  </p>
</template>

<script>
export default {
  props: ["score"],
  data() {
    return {
      highscore: null,
    };
  },
  mounted() {
    this.highscore = this.score;
  },
  updated() {
    if (this.score < this.highscore) {
      this.highscore = this.score;
    } else {
      this.highscore = this.highscore;
    }
  },
};
</script>

<style>
p.hs {
  margin-top: 1rem;
  font-size: 1.5em;
  font-weight: bold;
  font-family: Arial;
}
</style>
