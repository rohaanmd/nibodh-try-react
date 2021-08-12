import jj from './logo.svg';
import './App.css';
// import FirstComp from "./components/try-react-basics/index";
import {Component2 ,Component1} from "./components/try-react-basics/basics-from-function/index";
import ClassComp  from "./components/try-react-basics/basic-from-class/index";

// import jj from '../public/favicon.ico';
// can import
// File
// images
// CSS
// library


function App() {

  var object1= {
    name:"component"
  }


  return (
  <div>

<h1>THIS IS REACT APP</h1>

{/* first tarika */}



PROPS : to pass information/data.

{/* OBJECT  */}



{/* STATE */}

{/* class component */}
<ClassComp myObj={object1} one={{one:"po"}} data="string" data2={23} data3={["po","ok"]} />


{/* functional component */}

<Component1 myObj={object1} one={{one:"po"}} data="string" data2={23} data3={["po","ok"]}>

<div >
This is From  Functional {object1.name}
  </div>

</Component1>




<Component2 myObj={object1} one={{one:"po"}} data="string" data2={23} data3={["po","ok"]}  >
  
  <div>
this is from parent  Functional but COMPONENT2 {object1.name}
  </div>
  
  <div>
seconmd
  </div>

  
   </Component2>



{/* sec tarike */}

{/* <Component1 myObj={object1} one={{one:"po"}} data="string" data2={23} data3={["po","ok"]}  /> */}






  </div>
  );
}

export default App;
