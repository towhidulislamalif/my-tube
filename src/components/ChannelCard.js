import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utilities/constants';

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '326px',
        margin: 'auto',
        marginTop,
        width: { xs: '356px', md: '320px' },
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              border: '1px solid #e3e3e3',
              borderRadius: '50%',
              height: '180px',
              mb: 2,
              width: '180px',
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ color: 'gray', fontSize: '14px', ml: '5px' }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}
            >
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{' '}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
