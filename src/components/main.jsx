import React, { Component } from 'react';

class Main extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
      maxCount: 25,
      minDiameter: 10,
      maxDiameter: 25,
      minSpeed: 15,
      maxSpeed: 30,
      startingPosition: '100vh',
      endingPosition: '0vh',
      horizontalPosition: '100vw',
      bubbles: [],
      requestAnimation: ''
    }
    this.move = this.move.bind(this);
  }

  async componentDidMount() {
    for(let i=0; i<20; i++) {
      await this.setState({bubbles: [...this.state.bubbles, this.createBubble()]});
    }
    let requestAnimation = window.requestAnimationFrame(this.move);
    this.setState({requestAnimation: requestAnimation});

  }

  shouldComponentUpdate() {
    return this.state.count < this.state.maxCount;
  }

  async componentDidUpdate() {
    await this.setState({bubbles: [...this.state.bubbles, this.createBubble()]});
  }

  getRandomNumberBetween(x, y) {
    return (Math.floor(Math.random() * y) + x);
  }

  createBubble() {
    this.setState({count: this.state.count + 1});
    const element = document.createElement('div');
    const main = document.getElementById('main');
    main.appendChild(element);
    element.style.top = this.state.startingPosition;
    element.classList.add('bubble');
    const radius = this.getRandomNumberBetween(this.state.minDiameter, this.state.maxDiameter);
    element.style.width = `${radius}px`;
    element.style.height = `${radius}px`;

    let width = this.getRandomNumberBetween(10, 80);
    element.style.left = width + 'vw';

    let speed = this.getRandomNumberBetween(this.state.minSpeed, this.state.maxSpeed)/100;

    return {
      element,
      speed
    };
  }

  move() {
    this.state.bubbles.forEach( (bubble, i) => {
      bubble.element.style.top = Number(bubble.element.style.top.slice(0, -2)) - bubble.speed + 'vh';
      if(bubble.element.style.top.slice(0, -2) < this.state.endingPosition) {
        let filtered = this.state.bubbles.filter(elem => elem.element !== bubble.element)
        this.setState({bubbles: filtered});

        bubble.element.parentNode.removeChild(bubble.element);
        this.setState({count: this.state.count - 1})
      }
    });
    requestAnimationFrame(this.move);
  }

  moveToProjects() {
    window.location.href = '#projectsComp';
  }

  render() {
    return(
      <div id='main'>
        <h1>Hello, i'm <span className='main-span'>Maciej Szczepaniak</span></h1>
        <div className='btn-main' onClick={this.moveToProjects.bind(this)}>view my projects<span className='btn-arrow'></span></div>
      </div>
    )
  }
}


export default Main;
