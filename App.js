import React from "react";
import ReactDOM from "react-dom/client";

//React Element => ReactElement - JSObject => HTMLElement (When we render)
const heading = React.createElement("h1", { id: "heading" }, "Learning React");

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

//JSX ( HTML-Like syntax or XML-like syntax)
// It Transpiled before it reaches the JS - PARCEL -BABEL
//JSX => Bable Transpiled it to React.createElement => ReactElement -JSObject =>HTMLElement(render)
const jsxHeading = <h1 id="heading"> Learning react with me</h1>;
console.log(jsxHeading);






//React Component
//=> Class Based Component - OLD
//=> Functional Component - New

const Title = <div>Here is Our Title</div>;

const Data = ()=>(
    <div>
        <div>This is normal data</div>
    </div>
);



//React Functional Component
const HeadingComponent = () => (
  <div>
     {Title}
     {/* <Title/> */}
    <h1> This is Functional Component</h1>
    {Data()}
    <Data/>
    <Data></Data>
  </div>
);


root.render(<HeadingComponent/>);