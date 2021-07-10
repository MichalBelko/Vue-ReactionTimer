<template>
  <h1>Best Reaction Timer evuh</h1>

  <button class="button fill" @click="start" :disabled="isPlaying">
    <span>Play</span>
  </button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame" />
  <!-- <p v-if="isPlaying">Click on the button below ASAP</p> -->
  <Results v-if="showResults" :score="score" />
  <Highscore v-if="score != 0" :score="score" />
</template>

<script>
import Block from "./components/Block.vue";
import Results from "./components/Results.vue";
import Highscore from "./components/Highscore.vue";

export default {
  name: "App",
  components: { Block, Results, Highscore },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: 0,
      showResults: false,
      reactionTime: 0,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResults = false;
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  margin-top: 60px;
}
h1 {
  font-size: 3em;
  background: linear-gradient(to bottom, rgb(19, 0, 104), rgb(40, 54, 255));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* text-shadow: 2px 0px 5px rgb(66, 66, 66); */
}

body {
  background: rgb(70, 215, 252);
  background: radial-gradient(
    circle,
    rgba(70, 215, 252, 1) 47%,
    rgba(63, 94, 251, 1) 100%
  );
  margin: 0;
  padding: 0;
  height: 100%;
}
::selection {
  color: red;
  background-color: #fff;
}

button[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
strong {
  color: red;
  font-size: 1.1em;
}
.button {
  --light: #fff;
  --dark: #414856;
  --border: #c3c8de;
  --background: #4f29f0;

  display: block;
  margin: 0 auto;
  position: relative;
  border: 0;
  padding: 0 30px;
  width: 150px;
  height: 60px;
  border-radius: 5px;
  border: 1px solid var(--border);
  background: none;
  color: #fff;
  cursor: pointer;
  outline: none;
  box-shadow: 0 10px 50px rgba(65, 72, 86, 0.1);
  transition: transform 0.1s linear, color 0.1s linear, background 0.15s linear;
}
.button > span {
  display: inline-block;
  position: relative;
  z-index: 2;
  font: 400 20px "Varela Round", sans-serif;
  transition: transform 0.15s linear;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.button.fill {
  border: 0;
  color: var(--light);
  background: var(--background);
}

/* .cursor {
  --cursor: #c3c8de;
  position: fixed;
  top: -50px;
  z-index: 99;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: none;
  border: solid 2px var(--cursor);
  pointer-events: none;
  transition: transform 0.3s ease, background 0.3s ease, border-color 0.3s ease;
}

[cursor="link"]:hover ~ .cursor {
  mix-blend-mode: difference;
  transform: scale(1.5);
  cursor: none;
  background: #fff;
  border-color: #fff;
} */
</style>
