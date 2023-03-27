import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'


function PostDetails() {
    const {postid} = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/`+postid)
        .then(response => response.json())
        .then(postData => {
            setPost(postData)
        })
    }, [postid])

    return (
        <div className='PostDetails componentBox'>
            <h2> {post.title}</h2>
            <p> {post.body} </p>
        </div>
    )
}

export default PostDetails