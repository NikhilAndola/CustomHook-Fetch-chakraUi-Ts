import Header from '../components/Header';
import { Flex, Box } from '@chakra-ui/react';
import PhotoIcon from '../svgs/PhotoIcon';

const Photos = () => {
	return (
		<div>
			<Header />
			<Box mt='20' mx='auto' width={{ sm: '100%', lg: '80%' }}>
				<Box w='100%' borderWidth='1px' borderRadius='lg'>
					<Flex direction={{ lg: 'row' }}>
						<Flex
							paddingLeft='3'
							justifyContent='center'
							alignItems='center'
						>
							<PhotoIcon />
						</Flex>
						<Box p='6' w={{ sm: '100%', lg: '80%' }}>
							<Flex marginBottom='4'>
								<Box mt='1' as='p' marginRight='2.5'>
									AlbumId:
								</Box>
								<Box mt='1' as='p' fontWeight='bold'>
									01
								</Box>
							</Flex>
							<Flex marginBottom='4'>
								<Box mt='1' as='p' marginRight='2.5'>
									ID:
								</Box>
								<Box mt='1' as='p' fontWeight='bold'>
									01
								</Box>
							</Flex>
							<Flex marginBottom='4'>
								<Box mt='1' as='p' marginRight='2.5'>
									Title:
								</Box>
								<Box mt='1' as='p' fontWeight='bold'>
									sunt qui excepturi placeat culpa
								</Box>
							</Flex>
							<Flex marginBottom='4'>
								<Box mt='1' as='p' marginRight='2.5'>
									url:
								</Box>
								<Box mt='1' as='p' fontWeight='bold'>
									https://via.placeholder.com/600/92c952
								</Box>
							</Flex>
							<Flex marginBottom='4'>
								<Box mt='1' as='p' marginRight='2.5'>
									ThumbnailUrl:
								</Box>
								<Box mt='1' as='p' fontWeight='bold'>
									https://via.placeholder.com/150/92c952
								</Box>
							</Flex>
						</Box>
					</Flex>
				</Box>
			</Box>
		</div>
	);
};

export default Photos;
