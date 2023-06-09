import React from 'react'
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

const Rightbar = () => {
  return (
    <Box flex={3} alignItems="center" p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position='fixed'><Typography fontWeight={100} variant='h6'>Online Friends</Typography>
        <AvatarGroup total={10}>
          <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/1045886560/photo/portrait-of-smiling-handsome-man-in-blue-t-shirt-standing-with-crossed-arms-isolated-on-grey.jpg?s=612x612&w=0&k=20&c=TX1-1UJ3PKonFEmgs_WDZf7wtfqKVMHYjeRaYjaZ1Rc=" />
          <Avatar alt="Travis Howard" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" />
          <Avatar alt="Agnes Walker" src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1686053705~exp=1686054305~hmac=c68a6bffd285d190047a3795f7902d1b8c927d06cee5a2b77a3f03cecc02ff9d" />
          <Avatar alt="Trevor Henderson" src="https://media.gettyimages.com/id/1293903541/photo/young-woman-stock-photo.jpg?s=612x612&w=gi&k=20&c=_xH0YFaaK7wSFQpVt7I5St3Yn2Et9OkEdkdcrz0YJsE=" />
        </AvatarGroup>
        <Typography fontWeight={100} variant='h6' mt={5} mb={5}>Latest Photos</Typography>
        <ImageList rowHeight={100} cols={3} >
          <ImageListItem>
            <img src="data:image/jpeg;base64,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" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://media.istockphoto.com/id/155908124/photo/small-green-bonsai-tree-in-a-brown-plant-pot.jpg?s=612x612&w=0&k=20&c=GSbcXz_yoIFSwk5QF0vOUCk-hq0ULkhFTRBTfpQ25Yk=" alt="" />
          </ImageListItem>
          <ImageListItem><img src="https://www.frontlist.in/storage/post/1653642722_photo-1630343710506-89f8b9f21d31.jpg" alt="" /></ImageListItem>
        </ImageList>
        <Typography fontWeight={100} variant='h6' mt={5}>Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/155908124/photo/small-green-bonsai-tree-in-a-brown-plant-pot.jpg?s=612x612&w=0&k=20&c=GSbcXz_yoIFSwk5QF0vOUCk-hq0ULkhFTRBTfpQ25Yk=" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>

      </Box>
    </Box>
  )
}

export default Rightbar