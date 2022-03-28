<template>
<div>
	<input id="input1" type="number" min="1" max="20" value="5" v-model="numActs">
  1
  <input id="input2" type="range" min="1" max = "5" v-model.number="numParts">
  5
  <label for="input2">Number of participants</label>
  <input id="btn1" type="button" value="Fetch" v-on:click="moreActs"  v-bind:class = "{even: evenClick}">
	<table id="table1">
		<!-- data will be generated from code -->
		<tr>
			<th>Activity</th>
		
			<th>Type</th>

			<th>price</th>
		

		</tr>
		<tr v-for="(act,pos) in actArray" :key="pos">
			<td>{{act.activity}}</td>
			<td>{{act.type}}</td>
			<td>{{act.price}}</td>

		</tr>
	</table>
</div>
</template>

<style scoped>

.even{
	background: pink;
}

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { activity } from './datatypes.js';
import axios, { AxiosResponse } from "axios";



@Component
export default class numParticipants extends Vue {
numActs = 5;
numParts = 2;
actArray :Array <activity> = [];
evenClick = false;



mounted() : void{
this.actArray =[];

this.moreActs();


}

moreActs() :void{
this.actArray =[];
this.evenClick = !this.evenClick;
let apiUrl = "https://www.boredapi.com/api/activity/?participants=" + this.numParts;

for(let i = 0; i<this.numActs; ++i){	
axios.request({
	method: "GET",
      url: apiUrl,
     
    }).then((r:AxiosResponse) => r.data)
	.then((act: activity) => {
		this.actArray.push(act);
		
	});
}


}

}



</script>

<style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}
</style>
