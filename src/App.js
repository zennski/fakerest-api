import { useState, useEffect } from 'react';
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  function handleClick(title) {
    alert(`You clicked ${title}`);
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        {posts.map(post => (
          <div className="col-md-4 mb-3" key={post.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <button className="button" onClick={() => handleClick(post.title)}>Click Me!</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;