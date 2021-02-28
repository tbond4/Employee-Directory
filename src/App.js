import Body from "./components/bodyContent";
import Header from "./components/header";
import React from "react";
import API from "./utils/API";

class App extends React.Component {

state= {
  users:[]
}

componentDidMount(){
  this.searchUsers(20);
}

searchUsers= num => {
  API.getUsers(num).then(res => this.setState({users: res.results })).catch(err => console.log(err))
}
  render(){
  return (
    <div className="App">
     <Header/>
     <Body users={this.state.users}/>
    </div>
  )}
}

export default App;
