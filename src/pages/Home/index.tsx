import { Box, Center, Divider, Heading, Select } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getAllObjecs } from '../../api/requests/getAllObjects';
import MeteorTable from '../../components/MeteorTable';

const HomePage: React.FC = () => {
  const [objectCount, setObjectCount] = useState(0);
  const [measurementSystem, setMeasurementSystem] = useState<string>('km');

  useEffect(() => {
    getAllObjecs().then((result) => {
      console.log(result);
      setObjectCount(result.element_count);
    });
  }, []);

  const changeMeasurementSystem = (system: string) => {
    setMeasurementSystem(system);
  };

  return (
    <>
      <Center mt={10} flexDirection="column">
        <Heading as="h1" size="4xl" noOfLines={1}>
          METEOR
        </Heading>

        <Heading as="h4" size="md" color={'blue.600'}>
          See what's now at orbit
        </Heading>
      </Center>

      <Divider mt={10} />

      <Center mt={10}>
        <Heading
          as="h4"
          size="md"
          bg={'blue.600'}
          p={5}
          color="white"
          borderRadius={'lg'}
        >
          {objectCount} objects at orbit
        </Heading>
      </Center>

      <Center mt={10} flexDirection="column">
        <Select
          placeholder="Size measurement system"
          w={'md'}
          bg="ghostwhite"
          mb={5}
          onChange={(e) => {
            changeMeasurementSystem(e.target.value);
          }}
        >
          <option value="km">Kilometers</option>
          <option value="mt">Meters</option>
          <option value="mi">Miles</option>
          <option value="ft">Feet</option>
        </Select>

        <MeteorTable measurementSystem={measurementSystem} />
      </Center>
    </>
  );
};

export default HomePage;
