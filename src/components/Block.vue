<template>
  <div class="block" v-if="showBlock" @click="stopTimer">click me</div>
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
    console.log("mounted");
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  updated() {
    console.log("updated");
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },

    stopTimer() {
      clearInterval(this.timer);
      console.log(this.reactionTime);
    },
  },
};
</script>

<style>
.block {
  width: 400px;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
  color: white;
  background-color: red;
  border-radius: 20px;
  display: block;
}
</style>
