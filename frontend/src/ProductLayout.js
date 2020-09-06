import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from "@material-ui/core/Button";
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "white"
    },
    paper: {
        padding: theme.spacing(2),

        margin: "auto",
        maxWidth: 500,
        elevation: "12",


    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    buttonRoot: {
        padding: "auto",
        margin: "auto",
        maxWidth: 300,
        display: 'flex',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        }
    },
    logo: {
        height: 64,
        width: '100%',
    },

}));



export const ComplexGrid = props => {
    const classes = useStyles();

    const handleClick = () => {
        axios
            .post('http://localhost:5000/api/products', props.product)
            .then(() => console.log('Order Created'))
            .catch(err => {
                console.error(err);
            });

    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={props.product.img} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    {props.product.title}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                   id: {props.product.id}
                                </Typography>

                            </Grid>
                            <Grid item>
                                <Button onClick={handleClick} color="primary" variant="outlined" >
                                  BUY
                            </Button>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">${props.product.price}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
