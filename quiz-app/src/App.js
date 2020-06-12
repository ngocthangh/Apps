import React, { useState, useEffect } from 'react';
import './App.css'; 
import FlashCardList from './components/FlashCardList'
import axios from 'axios';
import Header from './components/Header';

function App() {
  const [flashCards, setFlashCards] = useState(SAMPLE_FLASH_CARDS)
  const [category, setCategory] = useState(0)
  const [amount, setAmount] = useState(10)
  
  useEffect(() => {
    console.log('fetching data')
    axios
      .get(`https://opentdb.com/api.php?amount=${amount}${category > 0 ? '&category=' + category : ''}`)
      .then(res => {
            setFlashCards(res.data.results.map((item, index) => {
              const answer = decodeString(item.correct_answer)
              const options = [
                ...item.incorrect_answers.map(option => decodeString(option)), 
                answer]
              return {
                id: `${index}-${Date.now()}`,
                question: decodeString(item.question),
                answer: item.correct_answer,
                options: options.sort(() => Math.random() - .5)
              }
            }))
          })
  }, [category, amount])

  function decodeString(string) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = string
    return textArea.value
  }

  function updateData(category, amount) {
    setCategory(category)
    setAmount(amount)
  }

  return (
    <div className="container">
      <Header updateData={updateData}/>
      <FlashCardList flashCards={flashCards}/>
    </div>
  );
}

const SAMPLE_FLASH_CARDS = [
  // {
  //   id: 1,
  //   question: 'What is 2 + 2?',
  //   answer: 4,
  //   options: [
  //     2,
  //     3,
  //     4,
  //     6
  //   ]
  // },
  // {
  //   id: 2,
  //   question: 'Question 2?',
  //   answer: 'Answer 1',
  //   options: [
  //     'Answer 1',
  //     'Answer 2',
  //     'Answer 3',
  //     'Answer 4'
  //   ]
  // },
]

export default App;
