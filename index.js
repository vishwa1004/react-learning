 
// const header = React.createElement("h1", {id:"head", abc:"xyz"}, "HI");
// const root = ReactDOM.createRoot(document.getElementById("root"));


 // Html pattern
//  <div id="parent" abc="xyz"><div id="child"><h1>HI</h1><h2>H2</h2></div></div>
const header = React.createElement("div", {id:"parent", abc:"xyz"},
React.createElement("div",{id:"child"}, [React.createElement("h1",{},"HI"),React.createElement("h2",{},"H2")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);


