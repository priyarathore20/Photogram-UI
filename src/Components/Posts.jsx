import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'


const Posts = () => {
  return (
    <div> <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Mumma's Kitchen"
        subheader="June 7, 2023"
      />
      <div className='feedImage'>
        <CardMedia
          component="img"
          height="20%"
          image="https://blog.uber-cdn.com/cdn-cgi/image/width=960,quality=80,onerror=redirect,format=auto/wp-content/uploads/2022/01/ue_deliverynotes_ecoproducts-1.jpg"
          alt="Paella dish"
        />
      </div>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card></div>
  )
}

export default Posts