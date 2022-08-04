import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Skeleton,
  Link,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { MeteorInterface } from '../../types/meteorInterface';
import { getAllObjecs } from '../../api/requests/getAllObjects';
import returnDayDate from '../../services/date/returnDayDate';

type MeteorTableProps = {
  measurementSystem: string;
};

const MeteorTable: React.FC<MeteorTableProps> = ({ measurementSystem }) => {
  const [objects, setObjects] = useState<MeteorInterface[]>([]);
  const [isTableLoaded, setTableLoaded] = useState<boolean>(false);

  const dateFilter: any = `${returnDayDate.returnYear()}-${returnDayDate.returnMonth()}-${returnDayDate.returnDay()}`;

  useEffect(() => {
    getAllObjecs().then((result) => {
      result.near_earth_objects[dateFilter].forEach(
        (meteor: MeteorInterface) => {
          setObjects((objects) => [
            ...objects,
            {
              links: meteor.links,
              id: meteor.id,
              neo_reference_id: meteor.neo_reference_id,
              name: meteor.name,
              nasa_jpl_url: meteor.nasa_jpl_url,
              absolute_magnitude_h: meteor.absolute_magnitude_h,
              estimated_diameter: meteor.estimated_diameter,
              is_potentially_hazardous_asteroid:
                meteor.is_potentially_hazardous_asteroid,
              close_approach_data: meteor.close_approach_data,
              is_sentry_object: meteor.is_sentry_object,
            },
          ]);
        }
      );
    });

    setTableLoaded(!isTableLoaded);
  }, []);

  const returnMeteorDiameter = (meteor: MeteorInterface) => {
    if (measurementSystem === 'km') {
      return meteor.estimated_diameter.kilometers;
    }
    if (measurementSystem === 'mt') {
      return meteor.estimated_diameter.meters;
    }
    if (measurementSystem === 'mi') {
      return meteor.estimated_diameter.miles;
    }
    if (measurementSystem === 'ft') {
      return meteor.estimated_diameter.feet;
    } else return meteor.estimated_diameter.kilometers;
  };

  return (
    <Skeleton isLoaded={isTableLoaded} fadeDuration={1}>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Objects that are now orbiting the planet</TableCaption>
          <Thead>
            <Tr>
              <Th>Object ID</Th>
              <Th>Object Name</Th>
              <Th>Is hazardous</Th>
              <Th isNumeric>Estimated diameter Max</Th>
              <Th isNumeric>Estimated diameter Min</Th>
              <Th>Close Approach Data</Th>
            </Tr>
          </Thead>
          <Tbody>
            {objects.map((object) => (
              <Tr>
                <Td>
                  <Link
                    href={object.nasa_jpl_url}
                    isExternal
                    color={'blue.500'}
                    textDecor="underline"
                  >
                    {object.id}
                  </Link>
                </Td>
                <Td>{object.name}</Td>
                <Td>
                  {object.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
                </Td>
                <Td isNumeric>
                  {Math.round(
                    returnMeteorDiameter(object).estimated_diameter_max * 100
                  ) / 100}{' '}
                  {measurementSystem}
                </Td>
                <Td isNumeric>
                  {Math.round(
                    returnMeteorDiameter(object).estimated_diameter_min * 100
                  ) / 100}{' '}
                  {measurementSystem}
                </Td>
                <Td>
                  {object.close_approach_data[0].close_approach_date_full}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Skeleton>
  );
};

export default MeteorTable;
