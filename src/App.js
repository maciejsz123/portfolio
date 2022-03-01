import React from 'react';
import './styles/App.sass';
import Main from './components/main';
import Header from './components/header';
import Projects from './components/projects';
import Path from './components/path';
import Experiments from './components/experiments';
import Skills from './components/skills';

function App() {
  return (
    <div className="App">
      <Main />
      <Header />
      <Projects />
      <Path />
      <Experiments />
      <Skills />
    </div>
  );
}

window.addEventListener('scroll', () => {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  let headlineDiv = document.querySelectorAll('.headline-div');
  let projects = document.querySelector('#projects');
  let experiments = document.querySelector('#experiments');
  let skills = document.querySelectorAll('.skill-bar');

  if(!headlineDiv[0].classList.contains('slide-from-left') && headlineDiv[0].getBoundingClientRect().bottom < windowHeight && windowWidth > 872) {
    headlineDiv[0].classList.add('slide-from-left');
    headlineDiv[0].classList.remove('to-animate');
  }
  if(!headlineDiv[1].classList.contains('slide-from-left') && headlineDiv[1].getBoundingClientRect().bottom < windowHeight && windowWidth > 872) {
    headlineDiv[1].classList.add('slide-from-left');
    headlineDiv[1].classList.remove('to-animate');
  }
  if(!headlineDiv[2].classList.contains('slide-from-left') && headlineDiv[2].getBoundingClientRect().bottom < windowHeight && windowWidth > 872) {
    headlineDiv[2].classList.add('slide-from-left');
    headlineDiv[2].classList.remove('to-animate');
  }
  if(!projects.classList.contains('slide-from-right') && projects.getBoundingClientRect().bottom < windowHeight && windowWidth > 872) {
    projects.classList.add('slide-from-right');
    projects.classList.remove('to-animate');
  }
  if(!projects.classList.contains('slide-from-right') && projects.getBoundingClientRect().bottom < windowHeight && windowWidth > 872) {
    projects.classList.add('slide-from-right');
    projects.classList.remove('to-animate');
  }
  if(!experiments.classList.contains('slide-from-right') && experiments.getBoundingClientRect().bottom < windowHeight && windowWidth > 872) {
    experiments.classList.add('slide-from-right');
    experiments.classList.remove('to-animate');
  }
  skills.forEach( (skill, i) => {
    if(i%2 === 0) {
      if(!skill.classList.contains('slide-from-left') && skill.getBoundingClientRect().bottom < windowHeight && windowWidth > 872) {
        skill.classList.add('slide-from-left');
        skill.classList.remove('to-animate');
      }
    } else {
      if(!skill.classList.contains('slide-from-right') && skill.getBoundingClientRect().bottom < windowHeight && windowWidth > 872) {
        skill.classList.add('slide-from-right');
        skill.classList.remove('to-animate');
      }
    }
  });
})

export default App;
