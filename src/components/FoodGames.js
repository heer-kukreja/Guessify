import React, {useState, useEffect} from 'react';
import Word from '../components/Word'
import WrongLetters from './WrongLetters';
import { checkWin, showNotification as show} from '../helpers/helpers'
import Popup from '../components/Popup'
import Notification from '../components/Notification'
import Riddle from '../components/Riddle'

import Header from '../components/Header'
import './FoodGames.css';

const words = ['coconut', 'potato', 'broccoli', 'tomato'];
const riddles = ["I’ve a brown shell on the outside \nAnd my shape is an oval \nHowever, I am not an egg \nFrom a palm tree’s where I fall", "I can be fried \nBoiled and mashed \nRoasted and baked \nScalloped and hashed", "I look like a group of \nlittle trees with stems and green leaves. \nI am very good for you. \nWho am I?", "You know me as a vegetable but I am a fruit. \nRed in colour, with seeds inside. \nYou can add me in your salad. \nI am potato’s best friend. \nWho am I?"];
const gifs = ["./images/coconut.gif", "./images/potato.gif", "./images/broccoli.gif", "./images/tomato.gif"];
const ran = Math.floor(Math.random() * words.length);


//  a  river horse or whale on land; I've four squat legs on which to stand. In water, my eyes skim by, watching out on the sly. When I'm hungry, it's grass I eat, soaking in African heat. Big and bad; fierce, but cute- it's well known that I yawn and toot. 

let selectedWord = words[ran];
let selectedRiddle = riddles[ran];
let selectedGif = gifs[ran];

function FoodGames() {
        
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [showNotification, setShowNotification] = useState(false);


    useEffect(() => {
        const handleKeydown = event => {
            const {key, keyCode} = event;
            if (playable && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase();

                if (selectedWord.includes(letter)) {
                    if (!correctLetters.includes(letter)) {
                        setCorrectLetters(currentLetters => [...currentLetters, letter]);
                    } else {
                        show(setShowNotification);
                    }
                } else {
                    if (!wrongLetters.includes(letter)) {
                        setWrongLetters(wrongLetters => [...wrongLetters, letter]);
                    } else {
                        show(setShowNotification);
                    }
                }
            }
        } 
        window.addEventListener('keydown', handleKeydown);

        return () => window.removeEventListener('keydown', handleKeydown);
    }, [correctLetters, wrongLetters, playable]);


    function saveLocalStatus (status){
        let nwins;
        let nloss;
        
        if(status === 'win') {
            let str_nwins = localStorage.getItem('wins');

            if(str_nwins===null || str_nwins==="null"){
                nwins = 0;
            } else {
                nwins = parseInt(str_nwins);
            }

            nwins++;

            localStorage.setItem('wins', nwins);


        } else if(status === 'lose') {
            let str_nloss = localStorage.getItem('loss');

            if(str_nloss===null || str_nloss==="null"){
            nloss = 0;
            } else {
            nloss = parseInt(str_nloss);
            }

            nloss++;

            localStorage.setItem('loss', nloss);
        
        }
    }

    function removeItem(array, item){
        for(var i in array){
            if(array[i]===item){
                array.splice(i,1);
                break;
            }
        }
        return array
    }


  function saveLocalWords (status, selectedWord) {

    var correctWords = [];
    var wrongWords = [];

    if (status==='win') {

        correctWords = localStorage.getItem('correctWords');
        correctWords = correctWords ? JSON.parse(correctWords) : [];

        wrongWords = localStorage.getItem('wrongWords');
        wrongWords = wrongWords ? JSON.parse(wrongWords) : [];
        
        wrongWords = removeItem(wrongWords ,selectedWord);
        localStorage.setItem('wrongWords', JSON.stringify(wrongWords));


        if(!correctWords.includes(selectedWord)){
            correctWords.push(selectedWord);
        }

        localStorage.setItem('correctWords', JSON.stringify(correctWords));


    } else if (status==='lose') {

        wrongWords = localStorage.getItem('wrongWords');
        wrongWords = wrongWords ? JSON.parse(wrongWords) : [];

        correctWords = localStorage.getItem('correctWords');
        correctWords = correctWords ? JSON.parse(correctWords) : [];

        correctWords = removeItem(correctWords ,selectedWord);
        localStorage.setItem('correctWords', JSON.stringify(correctWords));
        
        if(!wrongWords.includes(selectedWord)){
              wrongWords.push(selectedWord);
        }

        localStorage.setItem('wrongWords', JSON.stringify(wrongWords));
    }


}

    function playAgain() {
        let status = checkWin(correctLetters, wrongLetters, selectedWord);

        setPlayable(true);
        
        saveLocalStatus(status);
        saveLocalWords(status, selectedWord)
        //Empty the arrays
        setCorrectLetters([]);
        setWrongLetters([]);

        var random = Math.floor(Math.random() * words.length);
        while (random === ran) {
            random = Math.floor(Math.random() * words.length);
        }
        selectedWord = words[random];
        selectedRiddle = riddles[random];
        selectedGif = gifs[random];
    }


  return (
    <>   
      <div className="food-game-container">
        <Header/>
          <div className="food-game">
            <h3 className="food-game-heading">~Food for Thought Edition~</h3>
            <Riddle selectedRiddle={selectedRiddle} />
            <Word selectedWord={selectedWord} correctLetters={correctLetters} selectedRiddle={selectedRiddle} />
            <WrongLetters wrongLetters={wrongLetters} />
          </div>
      </div>
      <Notification showNotification={showNotification} bg='rgba(158, 12, 60, 0.918)' color='aliceblue'  />
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} selectedGif={selectedGif} setPlayable={setPlayable} playAgain={playAgain} />
    </>
  )  
}

export default FoodGames;