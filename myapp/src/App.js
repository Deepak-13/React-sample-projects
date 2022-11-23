import React, { Component } from 'react';
import { useState } from "react";
import { useEffect } from 'react';
import { useRef } from 'react';

/*function App() {

  const students = [
    {
      'id': 1,
      'name': 'Jack',
      'email': 'jack@gmail.com'
    },
    {
      'id': 2,
      'name': 'Mary',
      'email': 'mary@gmail.com'
    },
    {
      'id': 3,
      'name': 'John',
      'email': 'john@gmail.com'
    },
  ];

  return (
    <div className="container">
      <h1> Example of React Map Loop </h1>

      <table className="table table-bordered">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>

        {students.map((student, index) => (
          <tr data-index={index}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>
          </tr>
        ))}

      </table>

    </div>
  );
}
function Car(props) {
  return <h2>I am a {props.brand.model}!</h2>;
}

function Garage() {
  const carInfo = { name: "Ford", model: "Mustang" };
  const obj = new test();
  obj.display();
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={carInfo} />
    </>
  );
}
const App = () => {
  const user = 'Guest';

  return (
    <Message user={user} />
  );
}

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = { display: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ display: !this.state.display });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me!</button>
        {this.state.display && <h1>Welcome {this.props.user}!</h1>}
      </div>
    );
  }
};
function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}


function Example() {
  const [count1, setCount1] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count1} times`;
  });


  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count1} times</p>
      <button onClick={() => setCount1(count1 + 1)}>
        Click me
      </button>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((count) => count + 1);
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}*/
function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);


  useEffect(() => {
    count = count + 1;

  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export default App;
export { App };




