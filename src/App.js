import Body from "./components/BodyContent";
import Header from "./components/Header";
import React from "react";
import API from "./utils/API";
import Filter from "./components/filter";

class App extends React.Component {

state= {
  users:[],
  filterSearch:""
}
componentDidMount(){
  this.searchUsers(20);
}
handleInputChange=event=>{
  const {name, value}=event.target;

  this.setState({[name]:value})
}
handleCheckbox=event=>{
console.log( this.state.users)
  let sortedUsers = this.state.users.sort(function(a, b) {
    if(a.name.first.toLowerCase() < b.name.first.toLowerCase()) return -1;
    if(a.name.first.toLowerCase() > b.name.first.toLowerCase()) return 1;
    return 0;
   })
  
  this.setState({users: sortedUsers})
  
}

searchUsers= num => {
  API.getUsers(num).then(
    res => {console.log(res.data.results)
    this.setState({users: res.data.results })
  }).catch(err => console.log(err))
}
  render(){
  return (
    <div className="App">
     <Header/>
     <Filter handleInputChange={this.handleInputChange} handleCheckbox={this.handleCheckbox}/>
     <Body users={this.state.users} filterSearch={this.state.filterSearch}/>
    </div>
  )}
}

export default App;
