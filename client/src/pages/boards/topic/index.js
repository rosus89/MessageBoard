import * as React from 'react';
import Posts from './posts'
import {Accordion, AccordionSummary, Typography, FormControl, InputAdornment,InputLabel, OutlinedInput, Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';

export default function Topic() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {/* TODO: swiching expanding panels */}
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Topic
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>author or number of messages</Typography>
        </AccordionSummary>
       <Posts />
       <FormControl fullWidth sx={{ xs: 12 }} variant="outlined">
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
      




    </div>
  );
}