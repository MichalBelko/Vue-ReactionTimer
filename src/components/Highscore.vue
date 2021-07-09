<template>
  <p class="hs">
    Highscore: <strong class="hs">{{ highscore }}</strong> ms
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
  font-size: 1.6em;
  font-weight: normal;
  font-family: Arial;
  text-align: center;
}
</style>
