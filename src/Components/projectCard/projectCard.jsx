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
      background: 'rgba(30, 41, 59, 0.7)', // Slate 800 with transparency
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '16px',
      color: '#f8fafc',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)', 
      transition: 'all 0.3s ease', 
      '&:hover': {
        transform: 'translateY(-10px)', // Lift up instead of just scaling
        boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)', // Accent color glow
        border: '1px solid rgba(59, 130, 246, 0.4)'
      },
      marginBottom: 2 
    }}>
      <CardMedia
        component="img"
        height="240"
        image={props.img}
        alt={props.subheader}
        sx={{
          objectFit: 'cover',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600 }}>
          {props.title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#94a3b8' }}>
          {props.subheader}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: '0 16px 16px' }}>
        <IconButton 
          aria-label="GitHub repository" 
          sx={{ 
            color: '#cbd5e1',
            '&:hover': { color: '#3b82f6', background: 'rgba(59, 130, 246, 0.1)' }
          }}
        >
          <a href={props.git} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', display: 'flex' }}>
            <GitHubIcon />
          </a>
        </IconButton>
      </CardActions>
    </Card>
  );
}
