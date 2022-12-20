import { Box, Typography } from '@mui/material';
import Fab from '@mui/material/Fab';

export default function Post ({id, user,created,value,currentUser}) {

    const extUser = currentUser.username!==user
    return(
    <Box sx={{ display:'flex', width:'100%', flexDirection: extUser &&'row-reverse'}} >

    <Fab color= {extUser ? "error" : "primary" } variant="extended">
        {user}
    </Fab>

    <Box component="span" sx={{ p: 1, border: '1px solid #eeeeee', width:'100%' ,marginLeft:'1em', display:'flex', justifyContent:'space-between', alignItems:'center', background:'#FFFFEE'  }}>
        <Typography>{value}</Typography>
        <Typography variant="caption">{created}</Typography>
    </Box>
    </Box>
    )

}  
     
