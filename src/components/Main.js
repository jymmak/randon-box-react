
import React, { Component } from 'react';
import './css/main.css';

let randomColor = () => {
  let randomCharacters = '1234567890abcdef'.split('');
  let color = "#";
  for (var i = 0; i < 6; i++)
    color += randomCharacters[Math.floor(Math.random() * 16)];

  return color;
}


let fontFamily = () => {
  let fonts = ['Mina', 'Karma', 'Indie Flower', 'Comfortaa', 'VT323', 'Anonymous Pro', 'Nanum Myeongjo', 'Krona One', 'Cutive Mono', 'Nanum Brush Script', 'Permanent Marker', 'Courgette', 'Tangerine', 'Handlee', 'Kalam', 'Rock Salt', 'Reenie Beanie'];
  let fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
  return fontFamily;

}




class Main extends Component {
  render() {
    const styleText = fontFamily()
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Randon Box React</h1>
        </header>
        <div className="h40 box" style={{backgroundColor: randomColor()}} >
          <h2 className={styleText}  style={{ color: randomColor() }}>Para ganar hay que poner toda la fuerza en movimiento.Vow Clausewitz</h2>
        </div>
      </div>

    );
  }
}



export default Main;

