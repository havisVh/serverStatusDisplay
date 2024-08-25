

function Rings(dtaLLd){
    const dmn = dtaLLd.dtaLLd;
    return(
        <>
        <div className="ringContainer">
            {dmn.map((item, index) => {

                return(
                    <>
                        <div className={"ring "+item.status} key={index} style={{animation:"load 1s ease forwards",animationDelay:10 * index + "ms"}}></div>
                    </>
                )

            })}
        </div>
        </>

    )
}


export default Rings;