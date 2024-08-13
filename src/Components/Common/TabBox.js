import React from 'react';
import { Box, Text } from '@primer/react';

// Reusable Box component for cards displayed in Skills and Interests tabs
const TabBox = ({ title, content }) => {
  return (
    <Box
      sx={{
        boxShadow: 'overlay.shadow',
        borderRadius: '12px',
        p: 2,
        flex: 1,
      }}
    >
      <Text fontWeight='bold'>{title}</Text> <br/>
      {content}
    </Box>
  );
};

export default TabBox;
