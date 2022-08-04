import { Badge } from '@chakra-ui/react';

type hazardousBadgeProps = {
  isHazardous: boolean;
};

const HazardousBadge: React.FC<hazardousBadgeProps> = ({ isHazardous }) => {
  const ReturnHazardousBadge: React.FC = () => {
    if (isHazardous) {
      return (
        <Badge color={'red.600'} pl={3} pr={3} pt={1} pb={1} fontWeight="bold">
          Yes
        </Badge>
      );
    } else {
      return (
        <Badge
          color={'green.600'}
          pl={3}
          pr={3}
          pt={1}
          pb={1}
          fontWeight="bold"
        >
          No
        </Badge>
      );
    }
  };

  return (
    <>
      <ReturnHazardousBadge />
    </>
  );
};

export default HazardousBadge;
