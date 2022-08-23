import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        backgroundColor: "rgb(204, 204, 0)",
    },
    media: { height: 300 },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
        backgroundColor: "rgb(255, 255, 255)",
        width: 280,
        paddingLeft: 10
    },
}));

export default function FilterPersonsCard(props) {
    const classes = useStyles();

    const handleChange1 = (e, type, value) => {
        e.preventDefault();
        props.onUserInput(type, value); // NEW
    };
    const handleChange2 = (e, type, value) => {
        e.preventDefault();
        props.onSwitchChange(type);
    };
    const handleTextChange = (e, props) => {
        handleChange1(e, "name", e.target.value);
    };
    const handleSwitchChange = (e, props) => {
        handleChange2(e, "popularity");
    };

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h1">
                    Search a person or Sort
                </Typography>
                <TextField
                    className={classes.formControl}
                    id="filled-search"
                    label="Search persons"
                    type="search"
                    value={props.titleFilter}
                    variant="standard"
                    onChange={handleTextChange}
                />
                <FormGroup className={classes.formControl}>
                    <FormControlLabel control={<Switch defaultChecked onChange={handleSwitchChange}/>} label="Sorted by popularity" />
                </FormGroup>
            </CardContent>

            <CardMedia
                className={classes.media}
                image={img}
                title="Filter"
            />
            <CardContent>
                <Typography variant="h5" component="h1">
                    Search a person or Sort
                </Typography>
            </CardContent>
        </Card>
    );
}