import { useState } from "react";
import Button from "./Button";

function Table(props) {
   const middleColumn = {
      width: '20%'
   };
   const bigColumn = {
      width: '75%'
   };
   const smallColumn = {
      width: '5%'
   };
   const [taskName, setTaskName] = useState("");
   const [taskDescription, setTaskDescription] = useState("");

   function onWritingDescription(event) {
      setTaskDescription(event.target.value);
      console.log(taskDescription);
   }

   function onWritingName(event) {
      setTaskName(event.target.value);
      console.log(taskName);
   }

   return (
      <div className="Table">
         <form className="task-form">
            <label>Введите название задачи:</label>
            <input type="text" name="task-name" id="task-name" value={taskName} onChange={onWritingName} />
            <label>Введите описание задачи:</label>
            <textarea style={{ resize: 'none' }} name="task-description" id="task-description" cols="30" rows="10" value={taskDescription} onChange={onWritingDescription}></textarea>
            <button onClick={() => {
               if (taskDescription !== "" && taskName !== "") {
                  props.onAdd(props.list[0] ? props.list[props.list.length - 1].objectID : 0, taskName, taskDescription);
               }
               setTaskDescription("");
               setTaskName("");
            }
            } type="button">
               Добавить
            </button>
         </form>
         <div className="flex-container">
            {props.list.filter(props.isSearched(props.pattern)).map(item =>
               <div key={item.objectID} className="table-row">
                  <span style={middleColumn}>{item.taskName}</span>
                  <span style={bigColumn}>{item.taskDescription}</span>
                  <span style={smallColumn}>
                     <Button onClick={() => props.onDismiss(item.objectID)} className="button-inline">Сделано</Button>
                  </span>
               </div>
            )}
         </div>
      </div>
   );
}

export default Table;