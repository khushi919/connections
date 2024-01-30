import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BasicCard() {
  return (
    <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Card sx={{ minHeight: 250, minWidth: 500 ,maxHeight: 400 , maxWidth: 1000  , bgcolor: '#f4d0d0'}}>
      <CardContent>
        <Typography sx={{textAlign: ' center', fontWeight: 'bold', fontSize: 45, color: '#060000'}}>
        Make the first move
        </Typography>
        <Typography sx={{textAlign: ' center', fontWeight: 'semi-bold', fontSize: 30 , color: '#060000'}}>
        Start something Epic
        </Typography>
      </CardContent>
      <CardActions style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button size="large" sx={{ bgcolor: '#bf5f5f' , color: '#602323' }}>Learn More</Button>
      </CardActions>
    </Card>
    </Container>
  );
}