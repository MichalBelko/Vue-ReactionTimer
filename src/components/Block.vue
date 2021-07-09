<template>
  <div class="block" v-if="showBlock" @click="stopTimer">click</div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },

  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },

    stopTimer() {
      clearInterval(this.timer);
      this.$emit("end", this.reactionTime);
    },
  },
};
</script>

<style>
.block {
  width: 100%;
  text-align: center;
  padding: 120px 0;
  margin: 40px auto;
  color: white;
  font-weight: bold;
  background-color: rgb(23, 1, 85);
  display: block;
  font-size: 32px;
  text-transform: uppercase;
  letter-spacing: 2px;
}
</style>
