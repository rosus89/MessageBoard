import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Loading from '../loading';
import Header from '../../shared/header';
import Topic from './topic';
import Button from '@mui/material/Button';
import AddTopicModal from './modal';
import {apiGet} from '../../api'
// import io from 'socket.io-client';

function Boards({state, dispatch}) {
  const [expanded, setExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  
  // const socket = io()
  // socket.emit('message', {data: 'Hello from the client!'});

useEffect(() => { 
  
  const getUpdate = async () =>
    {
    const boards = await apiGet('board/get')
    dispatch({type:boards.route, payload:boards.data})
    
    }
  getUpdate()
},[dispatch])


  return (
    state.user && state.boards ? 
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
              {state.boards.map((topic) => <Topic  
                  currentUser={state.user}
                  id={topic._id} 
                  title={topic.title} 
                  created={topic.created}
                  key={topic._id}
                  owner={topic.owner}
                  posts= {topic.posts}
                  setExpanded={setExpanded} 
                  expanded={expanded} 
                  dispatch={dispatch}
              />)}
            </Container>
          </Container>
          {/* MODAL HERE */}
          <AddTopicModal  handleClose={handleClose} modalOpen={modalOpen} dispatch={dispatch} userID={state.user._id}/>
        </Box>
     :
    <Loading />
  )
 
}

export default Boards