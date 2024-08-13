import React, {useState, useEffect} from 'react';
import {BaseStyles, Box, TabNav, ThemeProvider} from '@primer/react';
import {BrowserRouter as Router, Navigate, Route, Routes, useLocation} from 'react-router-dom';
import ContactTab from './Components/Tabs/ContactTab';
import AboutMeTab from './Components/Tabs/AboutMeTab';
import InterestsTab from './Components/Tabs/InterestsTab';
import SkillsTab from './Components/Tabs/SkillsTab';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <BaseStyles>
          <MainContent/>
        </BaseStyles>
      </ThemeProvider>
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState();

  // Sets the selected tab based on the current path.
  // selectedTab will be used by TabNav to accurately show currently selected tab
  useEffect(() => {
    switch (location.pathname) {
      case '/skills':
        setSelectedTab('skills');
        break;
      case '/interests':
        setSelectedTab('interests');
        break;
      case '/contact':
        setSelectedTab('contact');
        break;
      default:
        setSelectedTab('about');
    }
  }, [location.pathname]);

  return (
    <Box padding='40px'>
      <nav>
        {/* Displays all the tabs at the top of the screen */}
        <TabNav>
          <TabNav.Link href='/about' selected={selectedTab === 'about'}>
            About Me
          </TabNav.Link>

          <TabNav.Link href='/skills' selected={selectedTab === 'skills'}>
            Skills
          </TabNav.Link>

          <TabNav.Link href='/interests' selected={selectedTab === 'interests'}>
            Interests
          </TabNav.Link>

          <TabNav.Link href='/contact' selected={selectedTab === 'contact'}>
            Contact
          </TabNav.Link>
        </TabNav>
      </nav>

      {/* Creates all the paths for all the tabs */}
      <Routes>
        <Route path='/' element={<Navigate replace to='/about' />} />
        <Route path='/about' element={<AboutMeTab/>} />
        <Route path='/skills' element={<SkillsTab/>} />
        <Route path='/interests' element={<InterestsTab/>} />
        <Route path='/contact' element={<ContactTab/>} />
      </Routes>
    </Box>
  );
}

export default App;
