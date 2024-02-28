
                        //   introduction to class based components in react





// import React,{Component} from "react";

// class Demo extends Component{

//     state={
//         name:"Sandeep",
//         age:23
//     }

//     changeStateName=()=>{
//         this.setState({name:"Shivam"});
//     }

//     changeStateAge=()=>{
//         this.setState({age:34});
//     }

//     // useEffect with blank blank []
//     componentDidMount(){
//         console.log("hello");
//     }

//     componentDidUpdate(){
//         console.log("re-rendered");
//     }

//     componentWillUnmount(){
//         console.log("component unmounted");
//     }

//     render(){
//         return(
//             <>
//             <h3>learning about class based component</h3>

//             <h4>{this.props.name}</h4>


//             <h3>{this.state.name}</h3>

//             <h2>{this.state.age}</h2>



//             <button onClick={this.changeStateName}>Change name</button>
//             <button onClick={this.changeStateAge}>Change age</button>
//             </>
//         )
//     }
// }

// export default Demo;