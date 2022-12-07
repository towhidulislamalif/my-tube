import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Stack, Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { fetchFromAPI } from '../utilities/fetchFromAPI';
import Videos from './Videos';
import Loader from './Loader';

const Videodetail = () => {
  const [videodetail, setVideodetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideodetail(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videodetail?.snippet) return <Loader />;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer
              className="react-player"
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {videodetail?.snippet?.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: '#fff' }}
              px={2}
              py={2}
            >
              <Link to={`/channel/${videodetail?.snippet?.channelId}`}>
                <Typography
                  variant={{ sm: 'subtitle1', md: 'h6' }}
                  color="#fff"
                >
                  {videodetail?.snippet?.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(
                    videodetail?.statistics?.viewCount
                  ).toLocaleString()}{' '}
                  views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(
                    videodetail?.statistics?.likeCount
                  ).toLocaleString()}{' '}
                  Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default Videodetail;
