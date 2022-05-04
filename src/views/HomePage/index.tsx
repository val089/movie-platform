import { useEffect, useState } from 'react';
import { Center, Spinner, Box } from '@chakra-ui/react';
import { api, endpoints } from 'api';

import { ColorModeToggle } from 'components/ColorModeToggle';
import { MediaList } from './MediaList';
import type { MediaListData } from './MediaList';

const data = {
  MediaListId: 3,
  IncludeCategories: false,
  IncludeImages: true,
  IncludeMedia: false,
  PageNumber: 1,
  PageSize: 15,
};

export const HomePage = () => {
  const [mediaList, setMediaList] = useState<MediaListData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      (async () => {
        try {
          const response = await api.post(endpoints.media, data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setMediaList(response.data);
          setIsLoading(false);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, []);

  return (
    <Center minHeight="100vh">
      <Box position="absolute" right={5} top={5}>
        <ColorModeToggle />
      </Box>
      {isLoading ? <Spinner /> : <MediaList data={mediaList} />}
    </Center>
  );
};
