import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


function Topic({title, author, created}) {
    return (
        <Grid item xs={12} md={12} lg={12}>
        <Paper>
            <Grid  spacing={2} container xs={12} md={12}>
                <Grid item xs={12}>
                    <Typography component="h2" variant="h5">
                        {title}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container xs={12} md={12} direction="row" justifyContent="space-between">
                        <Typography >
                        {author}
                        </Typography>
                        <Typography >
                        Created: {created}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
        </Grid>
    )

}


export default Topic