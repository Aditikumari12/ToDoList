import React, {useState} from "react";
import ToDoList from "./ToDoList";

const App = () => {

  const [list, setList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) =>{
    setList(event.target.value);
  };

  const ListOfItem = () => {
    setItems((olditems) => {
      return [...olditems, list];
    }); 
    setList("");
  };

  const deleteItems = (id) => {
    // console.log("deleted");

    setItems((olditems) => {
      return olditems.filter((arrElement, index) => {
        return index !== id;
      })
    })
  }


  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>ToDo List</h1>
          <br/>
          <input type="text" placeholder="Add a Item" onChange={itemEvent} value={list}  />
          <button onClick={ListOfItem}> + </button>

          <ol>
            {
              Items.map((itemval,index) => {
                return <ToDoList key={index} id={index} text={itemval} onSelect={deleteItems}/> 
              })
            }
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
