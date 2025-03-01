import { Route, Routes } from 'react-router-dom'
import Main from './routes/Main/Main'
// import About from './routes/About/About';
import BlogPost from './routes/BlogPost/BlogPost'
import Blog from './routes/Blog/Blog';
import './App.css'
// import Layout from './components/Layout/Layout'
// import Slider from './components/Slider/Slider';
import ThemeProvider from './components/ThemeProvider/ThemeProvider'

export default function App() {
    return (
     <ThemeProvider>
    <Routes>
         <Route path='/' element={<Main />}/>
        {/* <Route path="/about" element = {<Slider/>}/> */}
       <Route path="/blog" element = {<Blog/>}/>
       <Route path="/blog/:id" element = {<BlogPost/>}/>
         
    </Routes>
    </ThemeProvider>
  )
}


