import Slid from './loaderComp/loaderComp';
import './App.css';
import React,{ useEffect,useState } from 'react';

// console.log('App.js');


 function App() {
  
  const [dta, setDta] = useState([]);
  const [wtFtch, setWtFtch] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('status.json');
      const json = await response.json();
      setDta(json);
    };

    fetchData();
    setWtFtch(false);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {wtFtch?(
          <></>
        ):(
                  <Slid load={dta}/>

        )}
        
      </header>
    </div>
  );
}

export default App;
