import React from "react";

function Inputcontainer({val, writetodo, addtodo}){
    return(
        <div>
            
            <div>
                <input type="text" val={val} onChange={writetodo}></input>
                <button className='addbtn' onClick={addtodo}>+</button>
            </div>
        </div>
    )
}

export default Inputcontainer;