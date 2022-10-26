import { useEffect, useState } from "react";
import "./styles.css";

function App2() {
  const [info, setInfo] = useState([]);

  async function callApi() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await resp.json();
    return data;
  }

  console.log(callApi().then((data) => console.log(data)));

  //useState(inital value)
  //useEffect(function)
  useEffect(() => {
    callApi().then((data) => setInfo(data));
  }, []);

  console.log(info);

  return (
    <div className="container">
      <h1>User Data</h1>
      <p>
        {" "}
        <strong>Name: </strong> {info.name}
      </p>
      <p>
        {" "}
        <strong>Website: </strong> {info.website}
      </p>
      <p>
        {" "}
        <strong>Email: </strong>
        {info.email}{" "}
      </p>
      <p>
        {" "}
        <strong>Phone: </strong>
        {info.phone}{" "}
      </p>
    </div>
  );
}

export default App2;