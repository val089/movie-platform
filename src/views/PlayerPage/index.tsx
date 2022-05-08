import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Center, useToast, Spinner, Button } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import { api, endpoints } from 'api';

export const PlayerPage = () => {
  const { movieId } = useParams();
  const [movieUrl, setMovieUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const toast = useToast();

  const id = Number(movieId);

  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem('token');
    if (token) {
      (async () => {
        try {
          const response = await api.post(
            endpoints.mediaPlayInfo,
            { MediaId: id, StreamType: 'TRIAL' },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.data.ContentUrl) {
            setMovieUrl(response.data.ContentUrl);
          }
          setIsLoading(false);
        } catch (e) {
          toast({
            title: `Something went wrong`,
            status: 'error',
            isClosable: true,
          });
        }
      })();
    }
  }, []);

  const backToHome = () => {
    navigate('/home');
  };

  const goBackButton = (
    <Button
      size="md"
      colorScheme="purple"
      type="button"
      variant="primary"
      mx={6}
      onClick={backToHome}
    >
      Back To Home
    </Button>
  );

  return (
    <Center minH="90vh">
      {isLoading && <Spinner />}
      {movieUrl ? (
        <ReactPlayer url={movieUrl} controls={true} />
      ) : !isLoading ? (
        goBackButton
      ) : null}
    </Center>
  );
};
