import React from 'react';
import {Box, Link, Text} from '@primer/react';
import './Tabs.css';

const ContactTab = () => {
  return (
    <Box className={'fade-in'}>
      <Text className={'tab-title'}>Contact</Text>

      <Box className={'contact-text-container'} color='fg.muted'>
        <Link className={'link'} href='https://www.linkedin.com/in/marcusbeacon'>LinkedIn</Link> <br/>

        <Box className={'text-list'}>
          Phone Number:
        </Box > (412) 228-9211 <br/>

        <Box className={'text-list'}>
          Email:
        </Box > marcusbeacon@gmail.com <br/>

        <Box className={'text-list'}>
          Address:
        </Box > Pittsburgh, PA
      </Box>
    </Box>
  )
};

export default ContactTab;
