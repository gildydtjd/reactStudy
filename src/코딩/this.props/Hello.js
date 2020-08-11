import React, { Component } from 'react'

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    )
  }
}

// ReactDOM.render(
//   <HelloMessage name="Taylor" />,
//   document.getElementById('hello-example')
// );

// function App() {
//   return (
//     <div className="App">
//       <Hello name="Taylor"/>
//     </div>
//   );
// }