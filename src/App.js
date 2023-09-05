import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Nav/navbar';
import Home from './components/Home/Home';
import AboutUs from './components/About/About';
import ContactUs from './components/ContactUs/Contact';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import SignUp from './components/SignUp/SignUp';
import Join from './components/Join/Join';
import Movies from './components/tmdb/Movie';
import MovieDetails from './components/MoviesDetails/MovieDetails';
function App() {
  return (<>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/movies' element={ <Movies/>} />
        <Route path='/movieDetails/:id' element={ <MovieDetails/>} />
        <Route path='/aboutUs' element={ <AboutUs/>} />
        <Route path='/contactUs' element={ <ContactUs/>} />
        <Route path='/join' element={<Join />}>
          <Route path='' element={ <Login/>} />
          <Route path='login' element={ <Login/>} />
          <Route path='signUp' element={ <SignUp/>} />
        </Route>
        <Route path='*' element={ <NotFound/>} />
      </Routes>
    </div>
    </>);
}

export default App;
