import { useState } from "react";

const User = ({name,location}) =>{

    const [count,setCount] = useState(1);
    const [count2,setCount2] = useState(2);
    return (
        <div className="user-details">
            <h1>count:{count}</h1>
            <h1>count2:{count2}</h1>
            <h2>Name:{name}</h2>
            <h3>Location: {location}</h3>
            <h3>Contact: 1234567890</h3>
        </div>
    )
}

export default User;