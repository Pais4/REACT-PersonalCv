import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

/* Images */
import cesde from "assets/img/cesde.png";
import itm from "assets/img/itm.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

export default function MediaControlCard(props) {
  const classes = useStyles();

  const { title, letter, study, time } = props;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {letter}
          </Avatar>
        }
        title={title}
      />
      <CardMedia
        className={classes.media}
        image={(letter === 'C') ? cesde : itm }
        title="Title"
      />
      <CardContent>
        <Typography variant="h6" color="textSecondary" component="h1" >
          {study}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="h6">
          {time}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
      </CardActions>
      
    </Card>
  );
}
