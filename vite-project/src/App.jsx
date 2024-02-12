




/* import * as React from "REACT";
const welcome={
  greetings:"hey",
  title:"react",
};
function App (){
  return(
  <div>
    <h1>
      {welcome.greetings} {welcome.title}
    </h1>
    <label htmlFor="search">search:</label>
    <input id="search" type="text"/>
  </div>
  );
}
export default App; */
/* import * as REACT from "react";
function App() {
  const title="React";
  return(
    <div>
      <h1>Hello {title}</h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  );
}
export default App; */

/*import * as REACT from "react";
const welcome = {
  greeting: "Hey",
  title: "React",
};
function App() {
  return(
    <div>
      <h1> {welcome.greeting} {welcome.title} </h1>
      <label htmlFor="search">search: </label>
      <input id="search" type="text" />
    </div>
  );

} 
export default App;
*/

/*import * as REACT from "react";
const welcome = {
  greeting: "Hey",
  title: "React",
};
function App() {
  return(
    <div>
      <h1> {welcome.greeting} {welcome.title} </h1>
      <label htmlFor="search">search: </label>
      <input id="search" type="text" />
    </div>
  );
}
export default App;*/

const list =[
  {title:"React",url:"https//reactjs.org/",author:"jordan walke",num_comments:3,points:4,objectID:0,},
  {title:"Redux",url:"https//redux.js.org/",author:"dan abramov, andrew clark",num_comments:2,points:5,objectID:1,},
];
function App(){
  return(
    <div>
      <h1>MY Hacker Stories</h1>
      <label htmlFor="search" type="text"/>
      <hr />
      <ul>
        {list.map(function(item) {return <li>{item.title}</li>})}
      </ul>
    </div>
  );
}