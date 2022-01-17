import React from "react";
import ReactDOM from "react-dom";
import Headers from "./components/Headers";

import "./index.scss";

const App = () => {
  function willDoSomethingWithSubmit(e:React.SyntheticEvent<HTMLFormElement>){
    e.preventDefault()
  }
  return(

  <div className="max-w-6xl mx-auto mt-10 text-3xl">
    <Headers title='Components Home' submitQuery={willDoSomethingWithSubmit}/>

    <div>Name: Remove this</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
  </div>
)};
ReactDOM.render(<App />, document.getElementById("app"));
