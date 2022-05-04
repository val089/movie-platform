import { Center, Heading, Flex } from '@chakra-ui/react';

type MediaItem = {
  Id: number;
  Guid: string;
  MediaTypeCode: string;
  MediaTypeDisplayName: string;
  MediaAgeRestrictionValueMin: number;
  MediaAgeRestrictionImageUrl: string;
  Title: string;
  Description: string;
  Year: number;
  Duration: number;
  IsTrialContentAvailable: true;
  AvailableFrom: string;
  Images: {
    Id: number;
    MediaId: number;
    PlatformCode: string;
    ImageTypeCode: string;
    Url: string;
    Width: number;
    Height: number;
  }[];
  Products: {
    Id: number;
  }[];
};

export type MediaListData = {
  Entities: MediaItem[];
  PageNumber: number;
  PageSize: number;
  SourceType: string;
  TotalCount: number;
} | null;

interface MediaListProps {
  data: MediaListData | null;
}

export const MediaList = ({ data }: MediaListProps) => {
  //   console.log(data?.Entities);

  return (
    <Center pt={100}>
      <Flex flexWrap="wrap" justifyContent="center" maxW={1000} m="0 auto">
        {data &&
          data.Entities.map((item) => {
            console.log(item);
            return (
              <Center
                cursor="pointer"
                key={item.Id}
                p={5}
                m={5}
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                w={200}
                onClick={() => {
                  /* Play video*/
                }}
              >
                <Heading as="h2" fontSize="md">
                  {item.Title}
                </Heading>
              </Center>
            );
          })}
      </Flex>
    </Center>
  );
};
