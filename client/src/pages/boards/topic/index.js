import Posts from './posts'
import {Accordion, AccordionSummary, Typography, FormControl, InputAdornment,InputLabel, OutlinedInput, Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';
import { apiPost } from '../../../api';
import { useState} from 'react'




export default function Topic({id, title, expanded, setExpanded, created, posts, currentUser, dispatch}) {

  const [value, setValue] = useState("")
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const postData = await apiPost("post/create", {value:value, board:id, user:currentUser._id})
    setValue("")
    console.log(postData)
    // dispatch({type:"post/create", payload:postData})
    // dispatch({type:"post/create", payload:{value:value, board:id, user:currentUser._id}})


  }
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
      <Accordion expanded={expanded === id} onChange={handleChange(id)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={{id} + "-content"}
          id={{id} + "-header"}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {title}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{created}</Typography>
        </AccordionSummary>
        {/* ------POSTS HERE--------- */}
       <Posts posts= {posts} currentUser={currentUser}/>
       <FormControl  fullWidth sx={{ xs: 12 }} variant="outlined" >
          <InputLabel htmlFor="messageInput">Message</InputLabel>
          <OutlinedInput
            onChange={e=>setValue(e.target.value)}
            id="message"
            value={value}
            endAdornment={
              <InputAdornment position="end">
                <Button onClick={handleSubmit} type="submit" variant="contained" endIcon={<SendIcon />}>
                    Send
                  </Button>
              </InputAdornment>
            }
            label="message"
          />
        </FormControl>
      </Accordion>
  );
}