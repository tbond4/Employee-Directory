import Body from "./components/bodyContent";
import Header from "./components/header";
import React from "react";

class App extends React.Component {

state= {
  users:[]
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
