import { useEffect, useState } from 'react';
import './App.css';
import { Task1 } from './views/Task1';
import { fakeApi } from './fakeApi';
import { Task1Accordion } from './models';

function App() {
  const [task1Desc, setTask1Desc] = useState('');
  const [task1accordions, setTask1accordions] = useState<Task1Accordion[]>([]);

  useEffect(() => {
    // Представим, что здесь у нас запрос к API Wordpress:
    fakeApi.task1request()
      .then(response => {
        setTask1Desc(response);
      });
    fakeApi.task1accordionsRequest()
      .then(response => {
        setTask1accordions(response);
      })
  }, []);

  return (
    <div className='App'>
      <Task1 description={task1Desc} accordions={task1accordions} />
    </div>
  );
}

export default App;
