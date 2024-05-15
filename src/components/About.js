import User from "./User";
import UserClass from "./UserClass";


const About = ()=>{
    return (
        <div>
            <h1>About Us</h1>
            <h2>This is Namaste React Web Series</h2>
            {/* <User name= {"vinod(function)"} location = {"Andhra Pradesh(function)"} /> */}
            <UserClass name= {"vinod(class)"} location = {"Andhra Pradesh"} />
            
        </div>
    )
}

export default About;