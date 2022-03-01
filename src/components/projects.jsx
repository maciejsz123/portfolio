import React from 'react';
import ProjectElement from './projectElement';
import restaurant from '../images/main1.jpg';
import realEstate from '../images/realEstate.jpg';
import masterCard from '../images/masterCard.jpg';

function Projects() {
  return(
    <div id='projectsComp'>
      <div className='headline-div to-animate'>
        <h2 className='headline'>Projects</h2>
      </div>
      <div id='projects' className='to-animate'>

        <ProjectElement
          src={restaurant}
          text='restaurant'
          github='https://github.com/maciejsz123/restaurant'
          website='http://msecommerce.pl'
          technology={['React-JS', 'Sass', 'Bootstrap']}
        />
        <ProjectElement
          src={realEstate}
          text='real estate'
          github='https://github.com/maciejsz123/1realestate'
          website='http://msrealestate1.pl'
          technology={['React-JS', 'Redux', 'Sass', 'Bootstrap', 'Leaflet API']}
        />
        <ProjectElement
          src={masterCard}
          text='e commerce'
          github='https://github.com/maciejsz123/ecommercedeploy'
          website='https://serene-ravine-97752.herokuapp.com'
          technology={['React-JS', 'Redux', 'Sass', 'Bootstrap', 'Node.js']}
        />

      </div>
    </div>
  )
}

export default Projects;
