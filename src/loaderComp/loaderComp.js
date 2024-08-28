import SwitchingWidget from "./switchingWidget/swWdg";
import './loader.css';
import Rings from "./ringThingy/ringyPingy";
import React,{ useEffect,useState } from 'react';

function StatusOverview({load,vertex,config}){  
    const [details, setDetails] = useState({

    });
    const [show, setShow] = useState(true);


        function passProp(index){
            console.log(index);
            setDetails(load.data[index]);
            setShow(false);
        }

        function trace(index){
            vertex(config.actions[index].mapping);
        }
    return(<>
        <div className="Container">
            
            <div className="innerHeader">
                <div id="status" style={{color:"green"}}>Use Shift+scroll if ever necessary</div>
                <SwitchingWidget config={config.actions} trace={trace}/>
            </div>
            {show?(
            <div className="SlingRing">
                <Rings dtaLLd={load.data} showProp={passProp} animated={config.animated}/>
            </div>
            ):(
                <div className="details">
                    <div className="detailsHeader">
                        <button onClick={() => setShow(true)}>Close</button>
                    </div>
                    <div className="deeets">
                        <div className="dataRow">
                            <div className="dataCell">Status</div>
                            <div className="dataCell">{details.status}</div>
                        </div>
                        <div className="dataRow">
                            <div className="dataCell">Error</div>
                            <div className="dataCell">{details.error}</div>
                        </div>
                        <div className="dataRow">
                            <div className="dataCell">Time</div>
                            <div className="dataCell">{
                                new Date(details.timeStamp).toLocaleTimeString() + " " + new Date(details.timeStamp).toLocaleDateString('en-uk')
                                }</div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    </>);
}


export default StatusOverview;