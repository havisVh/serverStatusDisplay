

function Rings({dtaLLd,showProp,animated=true}){
    const dmn = dtaLLd;
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return(
        <>
        <div className="ringContainer">
            {animated?(<>
                {dmn.map((item, index) => {
                const rando = random(0,11333333);
                return(
                        <div className={"ring "+item.status} key={index + item.error + rando} 
                        style={{animation:"load 500ms ease forwards",animationDelay:10* index + "ms"}}
                        onClick={()=>{
                            showProp(index);
                        }}>
                        </div>
                )
            })}
            </>):(<>
                {dmn.map((item, index) => {
                const rando = random(0,110022);
                return(
                        <div className={"ring "+item.status} key={index + item.error + rando} 
                        style={{opacity:1}}
                        onClick={()=>{
                            showProp(index);
                        }}>
                        </div>
                )
            })}
            </>)}
        </div>
        </>

    )
}
export default Rings;