import React from "react";
import ReactDOM from "react-dom";
import BookmarkContent from "./BookmarkContent";
import "./index.scss";
import Login from "./Login";

const App = () => (
  <div className="max-w-6xl mx-auto mt-10 text-3xl">

    <div>Name: bookmark</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <div className="flex justify-center w-screen">
      <BookmarkContent />
      <Login />
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
