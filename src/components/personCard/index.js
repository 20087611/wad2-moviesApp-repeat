import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import img from '../../images/film-poster-placeholder.png'
import { PersonsContext } from "../../contexts/personsContext";

const useStyles = makeStyles({
    card: { maxWidth: 345 },
    media: { height: 500 },
    avatar: {
        backgroundColor: "rgb(255, 0, 0)",
    },
});

export default function PersonCard({ person, action }) {
    const classes = useStyles();
    const { likes } = useContext(PersonsContext);

    if (likes.find((id) => id === person.id)) {
        person.like = true;
    } else {
        person.like = false
    }

    return (
        <Card className={classes.card}>
            <CardHeader
                className={classes.header}
                avatar={
                    person.like ? (
                        <Avatar className={classes.avatar}>
                            <ThumbUpIcon />
                        </Avatar>
                    ) : null
                }
                title={
                    <Typography variant="h5" component="p">
                        {person.name}{" "}
                    </Typography>
                }
            />

            <CardMedia
                className={classes.media}
                image={
                    person.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                        : img
                }
            />



            <CardContent>
                <Typography variant="h6" component="p">
                    <CalendarIcon fontSize="small" />
                    {" "}Birthday: {person.birthday}{" "}
                </Typography>

                <Typography variant="h6" component="p">
                    <StarRateIcon fontSize="small" />
                    {" "}Popularity: {person.popularity}{" "}
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
                {action(person)}
                <Link to={`/persons/${person.id}`}>
                    <Button variant="outlined" size="medium" color="primary">
                        More Info ...
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}