import AccordionDetails from '@mui/material/AccordionDetails';
import Post from './post';

export default function Posts({posts}) {

return (
  <>
  {posts.map((topic) =>    
    <AccordionDetails>
      <Post key={topic.id} id={topic.id} user={topic.user} created={topic.created} value={topic.value} />
    </AccordionDetails>
    )}
  </>
)
}