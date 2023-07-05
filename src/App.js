
import './App.css';
import {useState} from 'react'
import React, { Component } from 'react';
import Card from './components/image.js'
import './MaterialDesign-Webfont-master/css/materialdesignicons.css'


function App() {

  const [cards, setCards] = useState([])

const [score, setScore] = useState(0)


const notSeen = (index) => {

  //first selection => add card index to array
if (cards.length === 0) {

  setCards([...cards, index])
  setScore(score + 1)
}


   if (!cards.includes(index)) {
      setCards([...cards, index])
      setScore(score + 1)
   }
  //user has selected 'not seen' incorrectly => restart game

 else if (cards.includes(index)) {
setScore(0)
setCards([])
}
  


}


const seen = (index) => {

  //user correctly selects 'seen' => increase score

  if (cards.includes(index)) {
      setScore(score + 1)
   }
    //user selects seen when they haven't => restart game
  else if (!cards.includes(index)) {
setScore(0)
setCards([])
}
  

}

let imgArray = []

imgArray[0] = new Image()
imgArray[0].src = '/imgs/aliens.jpeg'
imgArray[0].dataset.key = 'zero'


imgArray[1] = new Image()
imgArray[1].src = 'imgs/blade.jpg'
imgArray[1].dataset.key = 'one'

imgArray[2] = new Image()
imgArray[2].src = 'imgs/bloodsport.jpeg'
imgArray[2].dataset.key = 'two'

imgArray[3] = new Image()
imgArray[3].src = 'imgs/die-hard.jpg'
imgArray[3].dataset.key = 'three'

imgArray[4] = new Image()
imgArray[4].src = 'imgs/godfather.jpeg'
imgArray[4].dataset.key = 'four'

imgArray[5] = new Image()
imgArray[5].src = 'imgs/goodfellas.jpg'
imgArray[5].dataset.key = 'five'

imgArray[6] = new Image()
imgArray[6].src = 'imgs/heat.jpg'
imgArray[6].dataset.key = 'six'

imgArray[7] = new Image()
imgArray[7].src = 'imgs/rocky.jpg'
imgArray[7].dataset.key = 'seven'

imgArray[8] = new Image()
imgArray[8].src = 'imgs/t1.jpeg'
imgArray[8].dataset.key = 'eight'

imgArray[9] = new Image()
imgArray[9].src = 'imgs/t2.jpg'
imgArray[9].dataset.key = 'nine'

imgArray[10] = new Image()
imgArray[10].src = 'imgs/the-running-man.jpg'
imgArray[10].dataset.key = 'ten'

imgArray[11] = new Image()
imgArray[11].src = 'imgs/wolf-of-wall-street.jpg'
imgArray[11].dataset.key = 'eleven'

const getRandomItem = () => {

 
    const randomIndex = Math.floor(Math.random() * imgArray.length);



    return randomIndex;
}

const cardIndex = getRandomItem()


  return (
  <>
    <div className="App">
      <header>
        <h2><span className='mdi mdi-video-vintage'></span>Films memory game!</h2>
      <p className="score" style={{textAlign: 'center'}}>Score: {score}</p>
      </header>
   <div className="images" >
   <Card 

indexNum = {imgArray[cardIndex].dataset.key}
notSeen = {() => notSeen(imgArray[cardIndex].dataset.key)}
seen = {() => seen(imgArray[cardIndex].dataset.key)}
background={ `url("${imgArray[cardIndex].src}")`}
/>
</div>

    </div>
    <footer>Copyright © <a href="https://github.com/roblou2">Rob Louis</a></footer>
    </>
  );

}

export default App;
