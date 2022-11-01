
    import {
        Heading,
        Avatar,
        Box,
        Center,
        Image,
        Flex,
        Text,
        Stack,
        Button,
        useColorModeValue,

      } from '@chakra-ui/react';
      
      export default function Store(props) {
        
        let vall;
        let coll;
           if(props.expiry>16){
            vall= "متاح التسجيل";
            coll= '#3dcc55';
           }
           else{
            vall= "مغلق";
            coll='#a0a2a5';
           }
        return (
          <Center py={6}>
            <Box
              maxW={'270px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'md'}
              overflow={'hidden'}>
              {/* <Image
                h={'120px'}
                w={'full'}
                src={
                  'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                }
                objectFit={'cover'}
              /> */}
              <Flex justify={'center'} mt={5}>
                {/* <Avatar
                  size={'xl'}
                  src={{props.img}}
                  alt={'Author'}
                  css={{
                    border: '2px solid white',
                  }}
                /> */}
              </Flex>
      
              <Box p={6}>
                <Stack spacing={0} align={'center'} mb={5}>
                  <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                   { props.name}
                  </Heading>
                  <Text color={'gray.500'}>
                    <br/>
                    {props.disc}
                  </Text>
                </Stack>
      
                <Button
                  w={'full'}
                  mt={8}
                  bg={useColorModeValue('#151f21', 'gray.900')}
                  color={'white'}
                  rounded={'md'}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}>
                  {vall}
                </Button>
              </Box>
            </Box>
          </Center>
        );
      }