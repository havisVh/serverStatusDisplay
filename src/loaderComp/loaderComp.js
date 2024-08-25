import SwitchingWidget from "./switchingWidget/swWdg";
import Rings from "./ringThingy/ringyPingy";
function Slid(load){  
    console.log(load);
    
    const config = [
        {
            nm: '24h'
        },
        {
            nm: '7d'
        },
        {
            nm: '1mo'
        }];

        function trace(index){
            console.log('Tab switched to index:',index);
        }
    return(<>
        <div className="Container">
            <div className="innerHeader">
                <div id="status" style={{color:"green"}}>Online & Operational</div>
                <SwitchingWidget config={config} trace={trace}/>
            </div>
            <div className="SlingRing">
                <Rings dtaLLd={load.load}/>
            </div>
        </div>
    </>);
}


export default Slid;