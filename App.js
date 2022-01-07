import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [msg, setMsg] = useState("");
  const [list, setList] = useState([]);

  const handleMsgChange = (e) => {
    setMsg(e.target.value);
  };

  const addUser = async () => {
    if (msg == "") {
      alert("Validation fails! Please type message!");
      return;
    }

    const url = "http://localhost:4000/add-user";
    const data = {
      msg: msg,
    };

    await axios.post(url, data);

    const newList = [data, ...list];
    setList(newList);

    setMsg("");
  };

  const getUser = async () => {
    const url = "http://localhost:4000/user";

    const result = await fetch(url);
    const list = await result.json();
    const newList = [...list];
    setList(newList);
  };

  useEffect(() => getUser(), []);

  return (
    <div>
      <h2 className="bg-dark text-light p-1 mb-0">ChatApp!</h2>
      <h6 className="bg-dark text-light  p-2 mb-3">
        By Shubham Bankar, Id : 210940520096
      </h6>

      <div className="row">
        <div className="col-10">
          <input
            className="form-control form-control-lg m-2"
            type="text"
            name=""
            id=""
            value={msg}
            onChange={handleMsgChange}
            placeholder="Lets Chat here..."
          />
        </div>

        <div className="col-2">
          <input
            className="btn btn-primary w-75 p-2 m-2"
            type="button"
            name=""
            value="SEND"
            onClick={addUser}
          />
        </div>

        {list.map((item, index) => (
          <div key={index} className="alert alert-secondary fs-3">
            {item.msg}
          </div>
        ))}
      </div>
    </div>
  );
}
