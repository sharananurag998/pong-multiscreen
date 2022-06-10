import React from 'react';
import './StartScreen.css';

function StartScreen() {
  return (
    <div className="StartScreen">
        <div className="center_container">
            <div className="hero">Play Pong</div>
            <div className="btn_container">
                <button className="StartScreen__button redBtn">Player 1</button>
                <button className="StartScreen__button blueBtn">Player 2</button>
            </div>
        </div>
    </div>
  )
}

export default StartScreen