import MainContent from './components/MainContent/MainContent';
import Sidebar from './components/Sidebar/Sidebar';

import './styles/components/App/App.scss';

function App() {
  return (
    <div id='portfolio'>
      <h1>Nathan Rodrigues</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
