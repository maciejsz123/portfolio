import React from 'react';
import github from '../images/GitHub.png';
import glass from '../images/magnifyingGlass.png';

function ProjectElement(props) {
  return(
    <div className='project-element'>
      <div className='project-image'>
        <img className='main-image' src={props.src} alt={props.text}/>
        <span className='center-text'>{props.text}</span>
        <a onClick={props.link} href={props.website} target='blank'><img className='icon-image glass-image' src={glass} alt='glass' /></a>
        <a href={props.github} target='blank'><img className='icon-image git-image' src={github} alt='github' style={{backgroundColor: 'black'}} /></a>
        <div className='project-element-overlay'></div>
      </div>
      <div className='tech-section'>
        <p style={{textAlign: 'center'}}>technology stack:</p>
        <div className='technologies'>
          {props.technology.map( (v, id) => <div key={id}>{v}</div>)}
        </div>
      </div>
    </div>
  );
}

export default ProjectElement;
