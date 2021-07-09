<template>
  <p>
    Reaction time : <strong>{{ score }}</strong> ms
  </p>
  <!-- <p class="rank">{{ rank }}</p> -->
</template>

<script>
export default {
  props: ["score"],
  data() {
    return {
      rank: 0,
    };
  },

  mounted() {
    if (this.score < 250) {
      this.rank = "NInja Fingerss!";
    }
    if (this.score > 250 && this.score < 400) {
      this.rank = "Quite rapid Reflexes";
    }
    if (this.score >= 400) {
      this.rank = "Snail Pace...";
    }
  },
};
</script>

<style>
.rank {
  font-size: 1.4em;
  font-weight: bold;
  color: red;
}
</style>
