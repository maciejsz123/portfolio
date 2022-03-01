import React, { Component } from 'react';

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {technology: 'HTML & CSS', percent: '65%'},
        {technology: 'Sass', percent: '60%'},
        {technology: 'Bootstrap', percent: '50%'},
        {technology: 'JavaScript', percent: '70%'},
        {technology: 'React', percent: '60%'},
        {technology: 'Redux', percent: '40%'},
        {technology: 'Node.js', percent: '30%'},
        {technology: 'SQL', percent: '60%'}
      ]
    }
  }

  render() {
    let skills = this.state.skills.map( (skill, i) => (
      <div className='skill-bar to-animate' key={i}>
        <span className='bar-text'>{skill.technology}</span>
      </div>
    ));
    return(
      <div id='skillsComp'>
        <div className='headline-div to-animate'>
          <h2 className='headline'>Skills</h2>
        </div>
        <div id='skills' className='center-items'>
          {skills}
        </div>
      </div>
    )
  }
}

export default Skills;
