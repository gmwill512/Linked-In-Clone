import './App.css';
import Header from './components/Header/header.js';
import SidebarTop from './components/SideBar/sidebar.js';
import CenterContent from './components/CenterContent/center-content.js';
import SidebarBottom from './components/SidebarBottom/sidebar-bottom.js';
import RightSideContent from './components/RightSideContent/right-side-content.js';

function App() {
  return (
    <div className="app">
      <Header className="Header" />
      <div className="appBottom">
        <div className="Sidebar">
          <SidebarTop className="SidebarTop" />
          <SidebarBottom className="SidebarBottom" />
        </div>
        <CenterContent className="CenterContent" />
        <RightSideContent className="RightSideContent" />
      </div>
    </div>
  );
}

export default App;
