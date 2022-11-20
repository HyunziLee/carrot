import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.result.image}
          alt="등록된 이미지가 없습니다."
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.result.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.result.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}