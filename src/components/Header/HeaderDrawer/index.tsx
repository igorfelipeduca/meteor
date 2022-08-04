import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Link,
  Heading,
  Text,
} from '@chakra-ui/react';

import { GrGithub } from 'react-icons/gr';

type headerDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const HeaderDrawer: React.FC<headerDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Heading as="h2" size="xl">
            METEOR
          </Heading>
        </DrawerHeader>

        <DrawerBody>
          <Link href="https://github.com/igorfelipeduca" isExternal>
            <Button display={'flex'}>
              <GrGithub />
              <Text ml={3}>Github</Text>
            </Button>
          </Link>
        </DrawerBody>

        <DrawerFooter>
          <Text fontSize="md">Developed by Igor Duca</Text>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default HeaderDrawer;
