
import React, { Component } from 'react';
import './css/main.css';

let randomColor = () => {
  let randomCharacters = '1234567890abcdef'.split('');
  let color = "#";
  for (var i = 0; i < 6; i++)
    color += randomCharacters[Math.floor(Math.random() * 16)];

  return color;
}


let randomTypography = () => {
  let fonts = ['font-krona One', 'font-plaster', 'font-monoton', 'font-shrikhand', 'font-pacifico']
  let index = Math.round(Math.random() * fonts.length);
  let font = fonts[index];
  return font;
}




class Main extends Component {
  render() {
    const colorsRandom = { backgroundColor: randomColor() };  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Randon box React</h1>
        </header>
        <div className="h40 box" style={{backgroundColor: randomColor()}} >
          <h2 className={randomTypography()} style={{ color: randomColor() }}>Para ganar hay que poner toda la fuerza en movimiento.Vow Clausewitz</h2>
        </div>
      </div>

    );
  }
}



export default Main;

