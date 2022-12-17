import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Loading from '../loading';
import Header from '../../shared/header';
import Topic from './topic';
import Button from '@mui/material/Button';
import AddTopicModal from './modal'


function Boards({state}) {
  const [expanded, setExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

//temporary data
 const genDate = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
  const boards= [
    {id:"1",title:"Engineering",created:genDate, owner:"user1",
                            posts:[
                                      {id:1,user:"user1",created:genDate, value:"Hello!"},
                                      {id:2,user:"user2",created:genDate, value:"How are you?"}
                                  ]},
    {id:"2", title:"Design", created:genDate, owner:"user2",
                           posts:[
                                  {id:1,user:"user1",created:genDate, value:"Hello!"},
                                  {id:2,user:"user2",created:genDate, value:"How are you?"}
                                ]}
  ]
// end of temporary data

  return (
    state.user ? 
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/* --> Header HERE! <---*/}
        <Header user={state.user.username}/>
          {/* --> MAIN CONTENT HERE <--- */}
          <Container maxWidth="lg" sx={{ mt: 12}}>
            <Box sx={{justifyContent:'flex-end', display:"flex", marginBottom:"2em"}}>
              <Button variant="outlined" onClick={handleOpen}>New</Button>
            </Box>
            <Container>
              {boards.map((topic) => <Topic  
              id={topic.id} 
              title={topic.title} 
              created={topic.created}
              key={topic.id}
              owner={topic.owner}
              posts= {topic.posts}
              setExpanded={setExpanded} 
              expanded={expanded} 
              />)}
            </Container>
          </Container>
          {/* MODAL HERE */}
          <AddTopicModal  handleClose={handleClose} modalOpen={modalOpen}/>
        </Box>
     :
    <Loading />
  )
 
}

export default Boards