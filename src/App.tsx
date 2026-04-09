import './App.css'
import Card from './components/Card';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Signup from './components/Signup';
import Home from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import TweetsContents from './components/TweetsContents';
import VideoContents from './components/VideoContents';
import DocContents from './components/DocContents';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/tweets" element={<TweetsContents/>} />
        <Route path="/home/videos" element={<VideoContents/>} />
        <Route path="/home/docs" element={<DocContents/>} />
        <Route path="/home/links" element={<TweetsContents/>} />
        <Route path="/home/tags" element={<TweetsContents/>} />
        <Route path="/home/settings" element={<TweetsContents/>} />
        <Route path="/home/refer" element={<TweetsContents/>} />
      </Routes>
    </BrowserRouter>
      
    
  )
}

export default App
