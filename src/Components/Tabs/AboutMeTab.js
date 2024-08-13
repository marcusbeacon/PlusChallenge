import React from 'react';
import {Box, Text} from '@primer/react';
import './Tabs.css';
import Headshot from '../../Assets/Headshot.jpeg';

const AboutMeTab = () => {
  return (
    <Box className={'fade-in'}>
      <Text className={'tab-title'}>About Me</Text> <br/>

      <Box className={'about-row'}>
        <img src={Headshot} width='600' height='600' alt='Headshot of Marcus'></img>

        <Box className={'about-text-container'}>
          <Box className={'text-list'}>
            City:
          </Box> Pittsburgh <br/>

          <Box className={'text-list'}>
            Hometown:
          </Box> Pittsburgh <br/>

          <Box className={'text-list'}>
            Pets:
          </Box> None yet <br/>

          <Box className={'text-list'}>
            Status:
          </Box> Looking for a job

        </Box>
      </Box>
    </Box>
  )
};

export default AboutMeTab;
