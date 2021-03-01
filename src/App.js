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

handleInputChange=event=>{
  const {name, value}=event.target;

  this.setState({[name]:value})
}

componentDidMount(){
  this.searchUsers(20);
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
     <Filter handleInputChange={this.handleInputChange}/>
     <Body users={this.state.users} filterSearch={this.state.filterSearch}/>
    </div>
  )}
}

export default App;
