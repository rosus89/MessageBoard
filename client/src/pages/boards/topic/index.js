import * as React from 'react';
import Posts from './posts'
import {Accordion, AccordionSummary, Typography, FormControl, InputAdornment,InputLabel, OutlinedInput, Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';

export default function Topic({id, title, expanded, setExpanded, created, posts}) {

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
       <Posts posts={posts} />
       <FormControl fullWidth sx={{ xs: 12 }} variant="outlined" >
          <InputLabel htmlFor="messageInput">Message</InputLabel>
          <OutlinedInput
            id="Message Input"
    
            endAdornment={
              <InputAdornment position="end">
                <Button variant="contained" endIcon={<SendIcon />}>
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