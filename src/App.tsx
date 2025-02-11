import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <p className='mb-3 text-gray-500 dark:text-gray-400'>
          Basic react app installation using vite
        </p>
        <p className='text-gray-500 dark:text-gray-400'>
          With a quick add on of tailwind for some easy css
        </p>
      </div>
    </>
  );
}

export default App;
