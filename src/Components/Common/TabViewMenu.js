import React from 'react';
import { ActionList, ActionMenu, Box } from '@primer/react';

// Creates the ActionMenu to filter which cards to display on the tab
const TabViewMenu = ({ options, toggleMenuOptions, menuButtonLabel }) => {
  return (
    <Box className={'action-menu-container'}>
      <ActionMenu>
        {/* The button label is a light gray 'View:' followed by which
            options are selected ex: View: 2 selected */}
        <ActionMenu.Button>
          <Box color='fg.muted' display='inline-block'>
            View:
          </Box> {menuButtonLabel}
        </ActionMenu.Button>

        <ActionMenu.Overlay width='auto'>
          <ActionList selectionVariant='multiple'>
            {/* Creates all the options in the ActionMenu from the provided options array */}
            {options.map((option) => (
              <ActionList.Item
                key={option.name}
                selected={option.selected}
                onSelect={() => toggleMenuOptions(option.name)}
              >
                {option.name}
              </ActionList.Item>
            ))}
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </Box>
  );
};

export default TabViewMenu;
