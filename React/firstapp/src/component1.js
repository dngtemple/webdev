import Component2 from './component2';


function Component1(props){
    return(
        <div>
            <h1>component : {props.name}</h1>

            <Component2 name={props.name}/>
        </div>
    );

}

export default Component1;