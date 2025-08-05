import { Card, CardContent, Tab, Tabs } from '@mui/material';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  position: absolute;
  transform: translate(65%, -50%);
  z-index: 2;
  padding: 0px 16px;
  min-width: 800px;
  border-radius: 8px !important;
`;
export const CustomTabs = styled(Tabs)`
  height: 60px !important;
`;
export const CustomTab = styled(Tab)`
  flex-direction: row !important;
  justify-content: center;
  align-items: center;
  gap: 6px;
  &.Mui-selected {
    color: #10b981 !important;
  }
`;

export const CustomCardContent = styled(CardContent)`
  padding: 8px !important;
`;
