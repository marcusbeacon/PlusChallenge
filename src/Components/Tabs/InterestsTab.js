import React, { useState } from 'react';
import {Box, Text} from '@primer/react';
import './Tabs.css';
import TabBox from '../Common/TabBox';
import TabViewMenu from '../Common/TabViewMenu';
import { toggleMenuOptions, getMenuButtonLabel, isOptionSelected } from '../Common/TabViewMenuUtilities';

const Interests = () => {
  const [options, setOptions] = useState([
    { name: 'Music', selected: true },
    { name: 'Movies', selected: true },
    { name: 'Television', selected: true },
    { name: 'Hobbies', selected: true }
  ]);

  const handleToggleMenuOptions = (view) => {
    setOptions(prevOptions => toggleMenuOptions(prevOptions, view));
  };

  return (
    <Box className={'fade-in'}>
      <Text className={'tab-title'}>Interests</Text>

      {/* Creates the ActionMenu to filter the cards shown on this tab */}
      <TabViewMenu
        options={options}
        toggleMenuOptions={handleToggleMenuOptions}
        menuButtonLabel={getMenuButtonLabel(options)}
      />

      {/* isOptionSelected makes sure only options selected from the ActionMenu
          are displayed to the user */}
      <Box className={'tab-box-container'}>
        {isOptionSelected(options,'Music') && (
          <TabBox
            title='Music'
            content={
              <Text>
                - The Beatles <br/>
                - The Japanese House <br/>
                - Chappell Roan <br/>
                - Bastille <br/>
                - Dua Lipa
              </Text>
            }
          />
        )}

        {isOptionSelected(options,'Movies') && (
          <TabBox
            title='Movies'
            content={
              <Text>
                - Interstellar <br/>
                - Knives Out <br/>
                - Iron Man <br/>
                - The Terminal
              </Text>
            }
          />
        )}

        {isOptionSelected(options,'Television') && (
          <TabBox
            title='Television'
            content={
              <Text>
                - The Umbrella Academy <br/>
                - The Queen's Gambit <br/>
                - Loki <br/>
                - Ted Lasso <br/>
                - Avatar: The Last Airbender
              </Text>
            }
          />
        )}

        {isOptionSelected(options,'Hobbies') && (
          <TabBox
            title='Hobbies'
            content={
              <Text>
                - Biking <br/>
                - Kayaking <br/>
                - Photography <br/>
                - Disc Golf <br/>
                - Hiking
              </Text>
            }
          />
        )}

      </Box>
    </Box>
  );
};

export default Interests;