import {useState} from "react";


function Test() {
    const [posts, setPosts] = useState([]);

    const loadHandler = () => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => setPosts(data))
    };




    const fetchedPosts = posts.map((element) =>
        <div key={element.id}>
            <h3>{element.title}</h3>
            <p>{element.body}</p>
        </div>)




    return (
        <div>
            <h1>Testing Component in React</h1>
            <br/>
            <button className="button-style" onClick={loadHandler}>load all posts</button>
            {fetchedPosts}
        </div>
    );
}


export default Test;

