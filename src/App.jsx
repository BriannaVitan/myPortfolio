// bring in all the imports
import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Dependency for Icons



function App() {


  return (

    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
