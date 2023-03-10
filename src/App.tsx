import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import ListItem from './components/ListItem';

function App() {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar pão na padaria', done: true },
    { id: 2, name: 'Pegar correspodência', done: false },
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* Área para adicionar nova tarefa */}

        {/* Área para lista de tarefas */}
        {list.map((item, index) => (
          <ListItem key={index} item={item}/>
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;
