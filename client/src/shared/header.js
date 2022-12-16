import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




function Header({user}) {
    return (
        <AppBar position="absolute">
        <Toolbar
          sx={{
            pr: '24px',
          }}
        > 
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Boards
          </Typography>
          <Typography mx={2}>
            {user}
          </Typography>
          <Button variant="contained" color="success">Sign Out</Button>
        </Toolbar>
      </AppBar>
    )
}

export default Header