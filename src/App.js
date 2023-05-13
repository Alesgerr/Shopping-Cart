import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from 'react-hot-toast';
import "bootstrap/dist/css/bootstrap.min.css"
import Main from './components/Main'
function App() {
  // const isAdmin = false
  return (
    <div className='app'>
      <Toaster position='top-right'/>
      <Main />
    </div>
  );
}

export default App;