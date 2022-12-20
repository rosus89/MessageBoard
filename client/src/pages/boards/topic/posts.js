import AccordionDetails from '@mui/material/AccordionDetails';
import Post from './post';

export default function Posts({posts, currentUser}) {
return (
  <AccordionDetails>
  {posts.map((post) =>    

    
      <Post key={post._id} id={post._id} user={post.user.username} created={post.created} value={post.value} currentUser={currentUser} />
    
    )}
  </AccordionDetails>
)
}