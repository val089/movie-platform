import { useEffect, useState } from 'react';
import { Center, Heading } from '@chakra-ui/react';
import { api, endpoints } from 'api';

export const HomeScreen = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      (async () => {
        try {
          const response = await api.post(endpoints.media, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          console.log(response);
          // setMedia(response.data);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, []);

  return (
    <Center h="100vh">
      <Heading as="h1" textAlign="center">
        HomeScreen
      </Heading>
    </Center>
  );
};
