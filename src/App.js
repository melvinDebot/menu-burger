import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="left-col">
        <div className="logo">ALTRNTV</div>
          <div className="year">EST 1994</div>
            <div className="cover">
              <div class="play">
                  <ion-icon name="play"></ion-icon>
                </div>
            </div>
            <div className="data">
              <div className="album-name">
                <p id="name">Kinda like it</p>
              </div>
              <div className="album-artist">
                <p id="artist">Freak like me</p>
              </div>
            </div>
            <div className="block-cover"></div>
            <div className="buy">
              <p id="more">Buy now</p>
            </div>
          </div>
          <div className="right-col">
            <div className="upper">
              <div className="about">
                <h1>Song info</h1>
                <div className="album-name2">
                  <p><ion-icon name="radio"></ion-icon> &nbsp;<span>Kinda like it</span></p>
                </div>
                <div class="album-artist2">
                  <p><ion-icon name="person"></ion-icon>  &nbsp;<span>Freak Like Me</span></p>
                </div>
                <div className="album-genre2">
                  <p><ion-icon name="musical-notes"></ion-icon>  &nbsp;<span>Alternative</span></p>
                </div>
                <div className="media">
                  <p>Share now : </p>
                  <ul>
                    <li><ion-icon name="logo-facebook"></ion-icon></li>
                    <li><ion-icon name="logo-instagram"></ion-icon></li>
                    <li><ion-icon name="logo-twitter"></ion-icon></li>
                    <li><ion-icon name="logo-whatsapp"></ion-icon></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="upper-block"></div>
            <div className="bottom">
              <div class="next">
                <ion-icon name="fastforward"></ion-icon>
              </div>
              <div className="data2">
                <div className="album-name3">
                  <p id="name">Think about it</p>
                </div>
                <div class="album-artist3">
                  <p id="artist">Vhyce alven</p>
                </div>
                  </div>
                  <div className="more">
                    <p id="more">More like this</p>
                  </div>
            </div>
            <div class="block-bottom"></div>
          </div>
    </div>
  );
}

export default App;
