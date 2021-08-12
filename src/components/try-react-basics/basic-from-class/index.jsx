import React , {Component} from "react"

// class component

export default class Component3 extends Component{

constructor(props){
    super(props)

}


// componentDidMount()


ChangeHtml(){
    var ob = document.getElementById("change")
    ob.innerHTML="wow"
}



render(){



    console.log(this.props);
    return(
    <div>
        <h1 className="text-lowercase" id="change" >CLASS COMPONENT {this.props.myObj.name}
        </h1>

<button className="btn btn-danger" onClick={this.ChangeHtml} >click me</button>
<button className="btn btn-primary m-2" onClick={()=>{
    var ob = document.getElementById("change")
    ob.innerHTML="wow"
}} >click me2</button>

        </div>
        )

}

















}