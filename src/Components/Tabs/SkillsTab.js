import React, { useState } from 'react';
import {Box, Text} from '@primer/react';
import './Tabs.css';
import TabBox from '../Common/TabBox';
import TabViewMenu from '../Common/TabViewMenu';
import { toggleMenuOptions, getMenuButtonLabel, isOptionSelected } from '../Common/TabViewMenuUtilities';

const SkillsTab = () => {
  const [options, setOptions] = useState([
    { name: 'Language', selected: true },
    { name: 'Education', selected: true },
    { name: 'Operations', selected: true }
  ]);

  // Toggles the option passed through the view parameter
  const handleToggleMenuOptions = (view) => {
    setOptions(prevOptions => toggleMenuOptions(prevOptions, view));
  };

  return (
    <Box className={'fade-in'}>
      <Text className={'tab-title'}>Skills</Text>

      {/* Creates the ActionMenu to filter the cards shown on this tab */}
      <TabViewMenu
        options={options}
        toggleMenuOptions={handleToggleMenuOptions}
        menuButtonLabel={getMenuButtonLabel(options)}
      />

      {/* isOptionSelected makes sure only options selected from the ActionMenu
          are displayed to the user */}
      <Box className={'tab-box-container'}>
        {isOptionSelected(options,'Language') && (
          <TabBox
            title='Languages'
            content={
              <Text>
                - English <br/>
                - Spanish
              </Text>
            }
          />
        )}

        {isOptionSelected(options, 'Education') && (
          <TabBox
            title='Education'
            content={<Text>- BS in Computer Science from the University of Pittsburgh</Text>}
          />
        )}

        {isOptionSelected(options,'Operations') && (
          <TabBox
            title='Operations'
            content={
              <Text>
                - Java <br/>
                - AWS <br/>
                - API Development <br/>
                - Distributed Systems <br/>
                - Log Analysis <br/>
                - React <br/>
                - Performance Metrics <br/>
                - Git <br/>
                - JUnit
              </Text>
            }
          />
        )}

      </Box>
    </Box>
  );
};

export default SkillsTab;