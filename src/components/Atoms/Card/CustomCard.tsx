import CustomTabItem from '../Tabs/CustomTabs';
import { CustomCardContent, StyledCard } from './styles';

export default function CustomCard() {
  return (
    <StyledCard>
      <CustomCardContent>
        <CustomTabItem />
      </CustomCardContent>
    </StyledCard>
  );
}
