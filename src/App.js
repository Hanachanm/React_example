import React from 'react';

// divタグの部分のコードがjsxと呼ばれるもの
// jsxはjavascriptXMLの略
// javascriptを拡張したテンプレート言語の一つ（reactで）使うために開発された
function App() {
  return <h1>Hello World!</h1>;
}

// jsで書くとこうなる
// function App() {
//   return React.createElement(
//     "div",
//     null,
//     "helloworld"
//   );
// }



export default App;
