const Parent = React.createElement("h1",{id:"Parent"},"Inside Div");
console.log(Parent); 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Parent);