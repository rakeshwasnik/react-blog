import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Rakesh', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'notRakesh', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Rakesh', id: 3 }
      ])

    const [name, setName] = useState('Rakesh');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    }, [name]);  //twice runs useEffect as twice rendered: newer version of React has StrictMode which ran it twice on development environment for debugging purpose, it will be once in case of production
    
    return ( 

        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            <button onClick={() => setName('Rakesh2')}>Change Name</button>
            <p>{ name }</p>
        </div>
     );
}
 
export default Home;