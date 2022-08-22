import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        margin: 20,
    },
    root: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: theme.spacing(1.5),
        margin: 0,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    content: {
        margin: 20,
        color: "rgb(50, 50, 50)",
        fontWeight: "100px",
        fontStyle: 'italic',
        fontSize: 15,
        lineHeight: 2
    }
}));

const PersonDetails = ({ person }) => {
    const classes = useStyles();
    return (
        <>
            <Typography variant="h4" component="h4" className={classes.title}>
                Introduction
            </Typography>

            <Typography variant="h6" component="p" className={classes.content}>
                Hometown: {person.place_of_birth}
            </Typography>

            <Typography variant="h6" component="p" className={classes.content}>
                {person.biography}
            </Typography>

            <Paper component="ul" className={classes.root}>
                <li>
                    <Chip label="Also known as" className={classes.chip} color="primary" />
                </li>
                {person.also_known_as.map((p) => (
                    <li key={p}>
                        <Chip label={p} className={classes.chip} />
                    </li>
                ))}
            </Paper>
        </>
    );
};
export default PersonDetails;