import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function MediaCard(props) {
  return (
    <Card sx={{ 
      maxWidth: 345, 
      boxShadow: 3, 
      transition: '0.3s', 
      '&:hover': {
        transform: 'scale(1.05)', // Slightly scale up on hover
        boxShadow: 6 // Increased shadow on hover
      },
      marginBottom: 2 // Add bottom margin for spacing between cards
    }}>
      <CardMedia
        component="img"
        height="300"
        image={props.img}
        alt={props.subheader}
        sx={{
          objectFit: 'cover', // Ensure the image covers the area
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.subheader}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="GitHub repository">
          <a href={props.git} target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
        </IconButton>
      </CardActions>
    </Card>
  );
}
