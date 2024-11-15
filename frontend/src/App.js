import './App.css';
import Routes from './Routes';
import './Pages/LandingPages/Home/css/style.css';
import './Pages/LandingPages/Home/css/flaticon.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
    <Routes/>
    <ToastContainer />
    </>
  );
}

export default App;
