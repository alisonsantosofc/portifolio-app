import Sidebar from './components/Sidebar/Sidebar';
import styles from './App.scss';

function App() {
  return (
    <div className="app-style">
      <Sidebar />
      <div className="main-content">
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
