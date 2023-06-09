import {
  AddAPhoto,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from '@mui/material';
import React, { useState } from 'react';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
});

const Add = () => {
  const [Open, setOpen] = useState(false);

  return (
    <>
      <Tooltip title="Add Post">
        <Fab
          color="primary"
          aria-label="Add"
          onClick={(e) => setOpen(true)}
          sx={{
            position: 'fixed',
            bottom: 20,
            left: { xs: 'calc(50%-25px)', md: 30 },
          }}
        >
          <AddAPhoto />
        </Fab>
      </Tooltip>
      <StyledModal
        open={Open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          p={3}
          bgcolor={'background.default'}
          color={'text.primary'}
          borderRadius={8}
        >
          <Typography variant="h6" color={'text.primary'} textAlign="center">
            <u> Create Post </u>
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://st4.depositphotos.com/1017228/20160/i/1600/depositphotos_201608550-stock-photo-image-amazing-young-pretty-woman.jpg"
            />
            <Typography fontWeight={500} variant="span">
              @_Priya
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: '100%' }}
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="What's On Your Mind?"
            variant="standard"
          />
          <Stack direction="row" gap={2} mt={3} mb={2}>
            <EmojiEmotions color="success" />
            <Image color="primary" />
            <VideoCameraBack color="secondary" />
            <PersonAdd color="" error />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: '100px' }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
