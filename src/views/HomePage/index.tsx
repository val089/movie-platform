import { useEffect, useState } from 'react';
import { Center, Spinner, useToast } from '@chakra-ui/react';
import { api, endpoints } from 'api';

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
  // const [mediaList, setMediaList] = useState<MediaListData | null>(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const toast = useToast();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     (async () => {
  //       try {
  //         const response = await api.post(endpoints.media, data, {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         });
  //         setMediaList(response.data);
  //         setIsLoading(false);
  //       } catch (e) {
  //         toast({
  //           title: `Something went wrong, please refresh website`,
  //           status: 'error',
  //           isClosable: true,
  //         });
  //       }
  //     })();
  //   }
  // }, []);

  return (
    <Center minH="100vh">
      {/* {isLoading ? <Spinner /> : <MediaList data={mediaList} />} */}
      <h1>Hello!</h1>
    </Center>
  );
};
