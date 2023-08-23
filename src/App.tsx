import { useFakeApi } from './hooks/useFakeApi';
import { TaskDivider } from './components/TaskDivider';
import { Task1 } from './views/Task1';
import { Task2 } from './views/Task2';
import { Task3 } from './views/Task3';
import { Task4 } from './views/Task4';

import './App.css';

function App() {
  const {
    task1: {
      description,
      accordions,
    },
    task2: {
      products
    },
    task3: {
      blocks,
    }
  } = useFakeApi();

  return (
    <div className='App'>
      <TaskDivider title='Задание 1' />
      <Task1 description={description} accordions={accordions} />
      <TaskDivider title='Задание 2' />
      <Task2 products={products} />
      <TaskDivider title='Задание 3' />
      <Task3 blocks={blocks} />
      <TaskDivider title='Задание 4' />
      <Task4 />
    </div>
  );
}

export default App;
