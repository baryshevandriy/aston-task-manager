import './App.css';
import './index.css';
import { Children, useState } from 'react';
import Search from './Search';
import Table from './Table';

const list = [
];

function isSearched(searchTerm) {
  return function (item) {
    return item.taskName.toLowerCase().includes(searchTerm.toLowerCase());
  }
}

function App() {

  const [listState, setListState] = useState(list);
  const [term, setTerm] = useState('');

  function onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updateList = listState.filter(isNotId);
    setListState(updateList);
  }

  function onAdd(id, name, description) {
    const updateList = Array.from(listState);
    updateList.push(
      {
        taskName: name,
        taskDescription: description,
        objectID: id + 1
      }
    );
    setListState(updateList);
  }

  function onSearchChange(event) {
    setTerm(event.target.value);
  }

  return (
    <div className='page'>
      <div className="interactions">
        <Search value={term} onChange={onSearchChange} children={Children}>Поиск по названию задачи: </Search>
      </div>
      <Table pattern={term} onDismiss={onDismiss} onAdd={onAdd} list={listState} isSearched={isSearched}></Table>
    </div >
  );
}

export default App;
