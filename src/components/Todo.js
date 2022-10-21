import { useState } from "react";
function Todo() {
  const [input, setInput] = useState("");
  const [add, setAdd] = useState([]);

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  // add item
  const addHandler = (event) => {
    event.preventDefault();
    setAdd([...add, input]);
  };

  // delete item
  // const deleteHandler = () => {
  //   const ar = add.pop();
  //   setInput(ar);
  // };

  function deleteHandler(id) {
    const del = add.filter((del, index) => {
      return index !== id;
    });
    setAdd(del);
    // console.log(del);
  }

  return (
    <>
      <div className="form">
        <input type="text" onChange={inputChangeHandler} value={input} />
        <button type="button" onClick={addHandler}>
          Add
        </button>
      </div>

      {add.map((usr, id) => {
        return (
          <div className="lists" key={id}>
            <ul>
              <li>
                <p key={id}>{usr}</p>
                <button type="button" onClick={() => deleteHandler(id)}>
                  Delete
                </button>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default Todo;
