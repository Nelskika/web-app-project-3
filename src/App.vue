<template>
  <div id="app">
    
    <act-type/>
  
    <num-participants/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import actType from "./actType.vue";
import numParticipants from "./numParticipants.vue";
@Component({
  components: {
    actType,
    numParticipants,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  /* Place the two child components in a FlexBox row */
  display: flex;
  flex-direction: row;
}
</style>