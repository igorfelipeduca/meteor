import { Heading, Grid, GridItem, useDisclosure } from '@chakra-ui/react';

import { GiHamburgerMenu } from 'react-icons/gi';
import HeaderDrawer from './HeaderDrawer';

const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Grid templateColumns="repeat(2, 1fr)" p={5} alignItems="center">
      <GridItem h="10" w={'100%'} display="flex" alignItems={'center'}>
        <Heading as="h3" size="lg" cursor={'pointer'} mr={6} onClick={onOpen}>
          <GiHamburgerMenu />
        </Heading>

        <Heading as="h3" size="lg">
          METEOR
        </Heading>

        <HeaderDrawer isOpen={isOpen} onClose={onClose} />
      </GridItem>
    </Grid>
  );
};

export default Header;
