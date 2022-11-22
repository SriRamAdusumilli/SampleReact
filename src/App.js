import React, {Component} from "react"
import Greet from './components/Greet'
import Welcome from './components/welcome'
import Hello from './components/hello'
import Message from './components/Message'
import Counter from "./components/Counter"
import Sample from './components/Sample'
import Onclick from './components/Onclick'
import Usestate from './components/UseState'
import Onchange from "./components/Onchange"
import Samplelogins from './components/Samplelogs'
import Eventbind from './components/Eventbind'
//import  './App.css'
class App extends Component {
  render() {
    return(
      <div className="App">
        <Sample />
        <Greet name="Bruce" heroname="Batman"><p>This is childern props</p></Greet>
        <Greet name="Clark" heroname="Superman"/>
        <Greet name="Diana" heroname="Wonder Women"/>
        <Welcome />
        <Hello />
        <Message />
        <Counter />
        <div style={{margin:"10px"}}>
        <h1 style={{color:"white",backgroundColor:"lightblue",textAlign:"center",padding:"50px"}}>
          sample  heading tag with styling componentname
        </h1>
        </div>
        <Onclick />
        <Usestate />
        <Onchange />
        <Samplelogins />
        <Eventbind />
      </div>
    );
  }
}
export default App;