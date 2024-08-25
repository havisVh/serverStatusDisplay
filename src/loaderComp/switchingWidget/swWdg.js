import React, {useState} from 'react';

function SwitchingWidget({config,trace}){
    const  [current,setCurrent] = useState(0);
    
    function switchTab(index){
        setCurrent(index);
        trace(index);
    }

    return(
        <>
            <div className='switchContainer'>

                    {config.map((item,index)=>(
                        <div key={index} className={current === index ? 'switch active' : 'switch'} onClick={()=>switchTab(index)}>{item.nm}</div>
                    ))}

            </div>
        </>
    )

}

export default SwitchingWidget;