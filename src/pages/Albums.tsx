import Header from '../components/Header';
import { Flex, Box } from '@chakra-ui/react';
import AlbumIcon from '../svgs/AlbumIcon';

const Albums = () => {
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
							<AlbumIcon />
						</Flex>
						<Box p='6' w={{ sm: '100%', lg: '80%' }}>
							<Flex marginBottom='4'>
								<Box mt='1' as='p' marginRight='2.5'>
									UserId:
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
						</Box>
					</Flex>
				</Box>
			</Box>
		</div>
	);
};

export default Albums;
