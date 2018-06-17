import React, { Component } from 'react';
import Banner from './components/Banner';
import Card from './components/Card';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import images from './images';

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    images: this.shuffle(),
    clickArray: [],
    shake: ''
  };

  clickBind = this.clickEvent.bind(this);
  //when a user clicks on an image, we need to first check if the image is already in the array.
  // if the image is in the array, user's score will reset, clear array, shuffle images
  //if the image is not in array, push to array, shuffle images
  clickEvent(event) {
    const src = event.target.src;

    if (this.state.clickArray.includes(src)) {
      this.setState({ score: 0, clickArray: [], images: this.shuffle(), shake: 'shake' });
    } else {
      const coffee = this.state.clickArray.slice();
      const score = (this.state.score += 1);
      coffee.push(src);
      this.setState({ clickArray: coffee, score: score, images: this.shuffle(), shake: '' });
    }

    // const shuffle = this.shuffle();
    // this.setState({ images: shuffle });
  }

  shuffle() {
    const array = images.slice();
    const newArr = [];

    while (array.length > 0) {
      const random = Math.floor(Math.random() * array.length);
      const newString = array.splice(random, 1)[0];

      newArr.push(newString);
    }

    return newArr;
  }

  render() {
    return (
      <div>
        <Navbar score={this.state.score} highScore={this.state.highScore} />
        <Banner />
        <Wrapper shake={this.state.shake}>
          {this.state.images.map(item => <Card image={item} onClick={this.clickBind} key={item} />)}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
