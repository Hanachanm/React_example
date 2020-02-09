import React from 'react';
// jsxを使う際には、Reactの明記が必要

function App() {
  // const greeting = "Hi!"
  // const dom = <h1 className="foo">{greeting}</h1>;
  // return dom;

  // return <input type="text" onClick={() => {console.log("I am clicked")}} />;

  // return でかえすjsxは1つのタグでなければならない。-> divで囲う
  // divで囲うと、Rectで使うためだけの余計なdiv要素が含まれてしまう。 -> divの代わりにReact.Fragment
  return(
    <React.Fragment>
    {/* <div> */}
      <label htmlFor="bar">bar</label>
      <input type="text" onClick={() => {console.log("I am clicked")}} />
    {/* </div> */}
    </React.Fragment>
  )
}

export default App;
