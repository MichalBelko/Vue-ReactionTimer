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
p {
  font-size: 1.7em;
  font-weight: 700;
  font-family: Arial;
  margin-top: 80px;
  text-align: center;
}
p strong {
  color: black;
  font-weight: bold;
  text-shadow: 1px 0px 0px #000;
}
</style>
