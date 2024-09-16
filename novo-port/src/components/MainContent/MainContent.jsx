import AboutContainer from '../AboutContainer/AboutContainer';
import TechnologiesContainer from '../TechnologiesContainer/TechnologiesContainer';
import Projects from '../Projects/Projects';

import '../../styles/components/MainContent/MainContent.scss';

function MainContent() {
  return (
    <main id='mainContent'>
      <AboutContainer />
      <TechnologiesContainer />
      <Projects />
    </main>
  )
}

export default MainContent