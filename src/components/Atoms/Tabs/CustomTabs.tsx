import Box from '@mui/material/Box';
import {
  IconBuilding,
  IconPlaneTilt,
  IconSpeedboat,
} from '@tabler/icons-react';
import * as React from 'react';

import { CustomTab, CustomTabs } from '../Card/styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CustomTabItem() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <CustomTabs
          slotProps={{
            indicator: {
              style: { backgroundColor: '#10b981' },
            },
          }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <CustomTab
            icon={<IconPlaneTilt />}
            label="Flight"
            {...a11yProps(0)}
          />
          <CustomTab icon={<IconBuilding />} label="Hotel" {...a11yProps(1)} />
          <CustomTab
            icon={<IconSpeedboat />}
            label="Holiday"
            {...a11yProps(2)}
          />
        </CustomTabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
