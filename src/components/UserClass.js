import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            
        }
    }
    
    render() {
        const {name, location} = this.props;
        const {count} = this.state;
        return (
        <div className="user-details">
            <h1>count:{count}</h1>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count +1,
                })
            }}>Increment</button>
            <h2>Name:{name}</h2>
            <h3>Location: {location}</h3>
            <h3>Contact: 1234567890(class)</h3>
        </div>
    )

        
    }

}

export default UserClass;