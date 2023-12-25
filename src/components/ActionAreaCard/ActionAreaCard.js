import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export function ActionAreaCard({ user }) {
    return (
        <Card>
            <CardActionArea>
                <div style={{ minHeight: 120 }}>
                    {/* Will incorporate images later */}
                    {/* <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    /> */}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            { `${user.firstName} ${user.lastName}` }
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            { `Email: ${user.email}` }
                        </Typography>
                        { user.phoneNumber !== null && <Typography variant='body2' color='text.secondary'>
                            { `Phone: ${user.phoneNumber}` }
                        </Typography> }
                    </CardContent>
                </div>
            </CardActionArea>
        </Card>
    );
}
