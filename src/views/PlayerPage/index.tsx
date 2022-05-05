import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Center } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import { api, endpoints } from 'api';

export const PlayerPage = () => {
  const { movieId } = useParams();
  const [movieUrl, setMovieUrl] = useState<string | null>(null);

  const id = Number(movieId);

  const data = {
    MediaId: id,
    StreamType: 'TRIAL',
  };

  console.log(data);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      (async () => {
        try {
          const response = await api.post(endpoints.mediaPlayInfo, data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log(response);
          setMovieUrl(response.data.ContentUrl);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, []);

  return (
    <Center minHeight="100vh">
      {movieUrl && <ReactPlayer url={movieUrl} controls={true} />}
    </Center>
  );
};
