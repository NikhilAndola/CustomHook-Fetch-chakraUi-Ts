import { Flex, Heading, Link } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

const Header = () => {
	const location = useLocation();
	return (
		<Flex
			as='nav'
			align='center'
			justify='space-between'
			wrap='wrap'
			padding='1.5rem'
			bg='teal.500'
			color='white'
		>
			<Flex align='center' mr={5}>
				<Heading as='h1' size='lg' letterSpacing={'-.1rem'}>
					<Link href='/'>react-custom-hook</Link>
				</Heading>
			</Flex>
			<Flex>
				<Link
					color='white'
					_hover={{ color: 'gray.800' }}
					fontWeight='bold'
					marginRight='1.6rem'
					href='/'
					borderBottom={`${location.pathname === '/' ? '1px' : ''}`}
				>
					Albums
				</Link>
				<Link
					color='white'
					_hover={{ color: 'gray.800' }}
					fontWeight='bold'
					href='photos'
					borderBottom={`${location.pathname === '/photos' ? '1px' : ''}`}
				>
					Photos
				</Link>
			</Flex>
		</Flex>
	);
};

export default Header;
