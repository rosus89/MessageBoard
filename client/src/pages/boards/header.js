import NotificationsIcon from '@mui/icons-material/Notifications';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';


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
          <Typography>
            {user}
          </Typography>
          <Button variant="contained">Log Out</Button>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    )
}

export default Header