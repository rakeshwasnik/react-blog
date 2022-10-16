import { useState } from "react";

const Home = () => {

    const [name, setName] = useState("Rakesh");
    const [age, setAge] = useState(27);

    const handleClick =  (e) => {
        setName("Parvani");
        setAge(25);
    }
    
    return ( 

        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;