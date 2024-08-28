import StatusOverview from './loaderComp/loaderComp';
import './App.css';
import React,{ useEffect,useState } from 'react';
 function App() {
  const baseUri = 'http://localhost:3520'
  const [dta, setDta] = useState({});
  const [wtFtch, setWtFtch] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${baseUri}/monitor/db-status/?frame=24H`);
      const json = await response.json();
      setDta(json);
      setWtFtch(false);
    };
    fetchData();
  }, []);

  const config = {
    animated:true,
    actions:
    [
        {
            nm: '24h',
            mapping:"24H"
        },
        {
            nm: '7d',
            mapping:"1WK"
        },
        {
            nm: '1mo',
            mapping:"1MO"
        },
        {
            nm:"💀",
            mapping:"DEATHWISH"
        }
    ]
}

  
  function vertex(pass){
    const fetchData = async () => {
      const response = await fetch(`${baseUri}/monitor/db-status/?frame=${pass}`);
      const json = await response.json();
      setDta(json);
    };
    fetchData();
  }


  return (
    <div className="App">
      <header className="App-header">
        {wtFtch?(
          <></>
        ):(
                  <StatusOverview load={dta} vertex={vertex} config={config}/>

        )}
        
      </header>
    </div>
  );
}

export default App;
