<template>
<div>
<select name="Activity Type" id="menu" v-model="mType">
    <option value="cooking">Cooking</option>
    <option value="recreational">Recreational</option>
    <option value="diy">DIY</option>
    <option value="education">Education</option>
  </select>
  <input id="input1" type="number" min="1" max="20" value="5" v-model.number="numActs">
  <input id="btn2" type="button" value="Fetch" v-on:click="moreActs" v-bind:class = "{even: !evenClick}">
  <table id="table2">

    <tr>

      <th>Activity</th>
      <th>participants</th>
      <th>price</th>

    </tr>

    <tr v-for="(act,apos) in actArray" :key="apos">
      <td>{{act.activity}}</td>
			<td>{{act.participants}}</td>
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
export default class actType extends Vue {
numActs = 5;
numParts = 2;
mType = 'cooking';
actArray :Array <activity> = [];
evenClick = false;



mounted() : void{
this.actArray =[];

this.moreActs();


}

moreActs() :void{
this.actArray =[];
this.evenClick = !this.evenClick;
let apiUrl  ="https://www.boredapi.com/api/activity?type=" + this.mType;

for(let i = 0; i<this.numActs; ++i){	
axios.request({
	method: "GET",
      url: apiUrl,
      
    }).then((r:AxiosResponse) => r.data)
	.then((act: activity) => {
		this.actArray.push(act);
		console.log(this.actArray);
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
