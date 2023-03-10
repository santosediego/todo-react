import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import ListItem from './components/ListItem';
import AddArea from './components/AddArea';

function App() {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar pão na padaria', done: true },
    { id: 2, name: 'Pegar correspodência', done: false },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList);
  }

  const handleUpdateTask = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} onChange={handleUpdateTask} />
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;
