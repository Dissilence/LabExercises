import { useState, useEffect } from 'react';

function Postlist() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(postsData => {
                console.log(postsData);
                setPosts(postsData);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="PostList componentBox">
            {posts.map(post => (
                <div className='post' key={post.id}>
                    <h3>post #{post.id}: {post.title}</h3>
                    <p>{post.body}</p>
                    <a href={'/posts/'+post.id}>Read more . . .</a>
                </div>
            ))}
        </div>
    );
}

export default Postlist;