import React from "react"

// functional component



function Component1(props){
const changeHtml = () =>{
    var ob = document.getElementById("change")
    ob.innerHTML="wow"
}



    return (
        <div>
            
<h1 id="change">this is array {props.data3[1]}</h1>
<h1 id="change">this is FUNCTIONAL COMPONENT</h1>
            
<button className="btn btn-danger" onClick={changeHtml} >click me</button>
<button className="btn btn-primary m-2" onClick={()=>{
    var ob = document.getElementById("change")
    ob.innerHTML="wow"
}} >click me2</button>

        </div>
    )
}




 function Component2(props){
console.log(props);

    return (
        <div>
            jadu
            {props.children}
            more 
        </div>
    )
}

export {
    Component1,
    Component2
}
