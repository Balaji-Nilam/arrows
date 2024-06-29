import React from 'react'
import Categories from './Categories';
import Courses from './Courses';
import Float from './Float';
import Navbar from './Navbar';
import Partner from './Partners';
import Video from './Video';
import Footer from './Footer';
// import { Route } from 'react-router';
function Home() {
  return (
    <div>
      <Navbar />
      <Video/>
      <Partner/>
      <Float/>
      <Courses/>
      <Categories/>
      <Footer/>
    </div>

  )
}

export default Home