import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const About = ()=>{
const Navigateroute=useNavigate();
const refer=useRef();
function func(){
refer.current.focus();
refer.current.style.color="teal";

}
function navigate(){
    let x=10;
    if(x==10){
        Navigateroute('/child');
    }
}
    return(
        <div>

        <h1>About Page</h1>
        <button onClick={navigate}>Go To Home</button>
        {/* <Link to="/child">
            <button>Home</button>
        </Link> */}
        <input type="text" ref={refer} placeholder="type"/>
        <button onClick={func}>Reference</button>
        </div>
    )
}
export default About;