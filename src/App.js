import logo from './logo.svg';
import KloudOne from './KloudOne.png';
import './App.css';

import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios';

//internal CSS implementation in React
//const styles={
//pp:{
/*backgrounColor: 'rgba(0,0,0,0.1)',
justifyItems:'center', 
display:'grid',
height:'100vh',
fontFamily:'Arial',
color:'rgba(0,0,100,1)',
girdTemplateColumns: '1fr',
fontSize:25
},

select:{
width:'100%',
maxWidth:600
},


}*/

//function App(){
/*return(
<div>

<select id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
  </div>
 //commented
);
}*/

class App extends Component{
 constructor(props){
  super(props);
this.state={

restarray:[],

//cars: [
 //'Volvo','Kia','Audi','Bironao','Toyoto','Jeep','Bironao19','i10','SwiftDzire','Indica','Scorpio'
//],
selectedcars:[],  //selected cars array(empty to store the values of user once selected from our options)
};
this.carsselectedfunction = this.carsselectedfunction.bind(this);
this.closetodropdown = this.closetodropdown.bind(this);//should bind with this to use set state[carsselectedfunction]
}
//api call response
componentDidMount(){
  axios.get('https://api.instantwebtools.net/v1/passenger?page=0&size=10')
  .then(response=>{
    debugger;
    console.log(response);
  this.setState({restarray:response.data.data});
    console.log(this.state.restarray);
  });
}

carsselectedfunction(){
var y =document.getElementById("selectedId").value;
if(y!="Select"){
  debugger;
  this.state.selectedcars.push(y);
  this.setState({
    selectedcars: this.state.selectedcars
  })
  
  var temporaryarray = this.state.restarray;
  // make a separate copy of the array, to delete value from cars, dropdownelemtn removed....
  //var index = temporaryarray.indexOf(y)
  //find index functiom used to find the index value of an object in an array.
  var index=this.state.restarray.findIndex(x =>x.name===y);
    if (index !== -1) {

      temporaryarray.splice(index, 1);
      this.setState({restarray: temporaryarray});
    }
  console.log(this.state.selectedcars);
}
document.getElementById("selectedId").value= "Select";
//console.log(y);

}
//adding to dropdown(when presses 'x')
closetodropdown(e){
  debugger;
console.log(e.target.id);
var y=e.target.id;
this.state.restarray.push({name:y});
this.setState({
  restarray: this.state.restarray
})

var temporaryarray = this.state.selectedcars; 
  var index = temporaryarray.indexOf(y)
  if (index !== -1) {
    temporaryarray.splice(index, 1);
    this.setState({selectedcars: temporaryarray});
  }
}

render(){
return(
<div className="divelement">
<div className="searchcss">
{this.state.selectedcars.map((per)=>{
 //if there is some elements in Selected car's elements it will show here In Front-End page
 return <button className="options">{per} <a><button className="buttoncss" id={per} name={per} onClick={this.closetodropdown}>x</button></a></button>
 })}
</div>
<div className="sbar">
<select size="1" className="selectcss" name="selectcss" placeholder="selct..." id="selectedId" onClick={this.carsselectedfunction}>
<option value="Select" disabled selected hidden>Choose...</option>
 {this.state.restarray.map((singlearray)=>{
 return <option className="listspace"value={singlearray.name}>{singlearray.name}</option>
 })}
</select>
</div>
</div>
//commented for git
);



}

}

export default App;
//<div style={styles.app}>
//<h2> Multiple Select DropDown Using React </h2>
//<SelectDropdown style={styles.select}/>*/</div>