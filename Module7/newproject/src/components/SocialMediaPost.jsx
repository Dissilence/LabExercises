import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import SocialMediaForm from './SocialMediaForm';
import SocialMediaList from './SocialMediaList';
import axios from 'axios';

function SocialMediaPost() {
  const [posts, setPosts] = useState([]);

//https://jsonplaceholder.typicode.com/

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setPosts(res.data))
      
      .catch(err => console.log(err));
      
  }, []);

  const addPost = (newPost) => {
    axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
      .then(res => setPosts([...posts, res.data]))
      .catch(err => console.log(err));
  };

  console.log(posts)

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Social Media Posts
      </Typography>
      <SocialMediaList posts={posts} />
      <SocialMediaForm addPost={addPost} />
    </Container>
  );
}

export default SocialMediaPost;