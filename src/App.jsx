import './App.css'
import Header from './components/Header'
import GameActions from './components/GameActions'
import Ones from './components/gameComponents/Ones'
import Twos from './components/gameComponents/Twos'
import Threes from './components/gameComponents/Threes'
import Fours from './components/gameComponents/Fours'
import Fives from './components/gameComponents/Fives'
import Sixes from './components/gameComponents/Sixes'
import Sum from './components/gameComponents/Sum'
import Bonus from './components/gameComponents/Bonus'
import Pair from './components/gameComponents/Pair'
import TwoPairs from './components/gameComponents/TwoPairs'
import ThreeOfAKind from './components/gameComponents/ThreeOfAKind'
import FourOfAKind from './components/gameComponents/FourOfAKind'
import SmallStraight from './components/gameComponents/SmallStraight'
import LargeStraight from './components/gameComponents/LargeStraight'
import FullHouse from './components/gameComponents/FullHouse'
import Chance from './components/gameComponents/Chance'
import Yatzy from './components/gameComponents/Yatzy'
import Total from './components/gameComponents/Total'

import React, { useState } from 'react'

function App() {
  // For each component, we need to store the state of the dice
  
  const [holdDice, setHoldDice] = useState([false, false, false, false, false, false])
  const [dice, setDice] = useState([1, 2, 3, 4, 5])
  const [couldSelect, setCouldSelect] = useState(false)
  const [rollsLeft, setRollsLeft] = useState(3)
  const [sum, setSum] = useState(0)
  const [bonus, setBonus] = useState(0)
  const [total, setTotal] = useState(0)
  const [ones, setOnes] = useState([0, 0, 0, 0, 0])
  const [twos, setTwos] = useState([0, 0, 0, 0, 0])
  const [threes, setThrees] = useState([0, 0, 0, 0, 0])
  const [fours, setFours] = useState([0, 0, 0, 0, 0])
  const [fives, setFives] = useState([0, 0, 0, 0, 0])
  const [sixes, setSixes] = useState([0, 0, 0, 0, 0])
  const [pair, setPair] = useState([0, 0, 0, 0, 0])
  const [twoPairs, setTwoPairs] = useState([0, 0, 0, 0, 0])
  const [threeOfAKind, setThreeOfAKind] = useState([0, 0, 0, 0, 0])
  const [fourOfAKind, setFourOfAKind] = useState([0, 0, 0, 0, 0])
  const [smallStraight, setSmallStraight] = useState([0, 0, 0, 0, 0])
  const [largeStraight, setLargeStraight] = useState([0, 0, 0, 0, 0])
  const [fullHouse, setFullHouse] = useState([0, 0, 0, 0, 0])
  const [chance, setChance] = useState([0, 0, 0, 0, 0])
  const [yatzy, setYatzy] = useState([0, 0, 0, 0, 0])
  
  const rollDice = () => {
    if (rollsLeft > 0) {
      const newDice = []
      for (let i = 0; i < 6; i++) {
        if (holdDice[i]) {
          newDice.push(dice[i])
        } else {
          newDice.push(Math.floor(Math.random() * 6) + 1)
        }
      }
      setDice(newDice)
      setRollsLeft(rollsLeft - 1)
    }
  }

  const newGame = () => {
    setHoldDice([false, false, false, false, false, false])
    setDice([1, 2, 3, 4, 5, -1])
    setRollsLeft(3)
    setTotal(0)
    setOnes([])
    setTwos([])
    setThrees([])
    setFours([])
    setFives([])
    setSixes([])
    setSum([])
    setBonus([])
    setPair([])
    setTwoPairs([])
    setThreeOfAKind([])
    setFourOfAKind([])
    setSmallStraight([])
    setLargeStraight([])
    setFullHouse([])
    setChance([])
    setYatzy([])
  }

  const possibleChoices = [
    { name: 'Ones', value: ones, setValue: setOnes, Possible: true },
    { name: 'Twos', value: twos, setValue: setTwos, Possible: true },
    { name: 'Threes', value: threes, setValue: setThrees, Possible: true },
    { name: 'Fours', value: fours, setValue: setFours, Possible: true },
    { name: 'Fives', value: fives, setValue: setFives, Possible: true },
    { name: 'Sixes', value: sixes, setValue: setSixes, Possible: true },
    { name: 'Pair', value: pair, setValue: setPair, Possible: true },
    { name: 'TwoPairs', value: twoPairs, setValue: setTwoPairs, Possible: true },
    { name: 'ThreeOfAKind', value: threeOfAKind, setValue: setThreeOfAKind, Possible: true },
    { name: 'FourOfAKind', value: fourOfAKind, setValue: setFourOfAKind, Possible: true },
    { name: 'SmallStraight', value: smallStraight, setValue: setSmallStraight, Possible: true },
    { name: 'LargeStraight', value: largeStraight, setValue: setLargeStraight, Possible: true },
    { name: 'FullHouse', value: fullHouse, setValue: setFullHouse, Possible: true },
    { name: 'Chance', value: chance, setValue: setChance, Possible: true },
    { name: 'Yatzy', value: yatzy, setValue: setYatzy, Possible: true },
  ]

  const updateTotal = () => {
    let newTotal = 0
    possibleChoices.forEach((choice) => {
      if (!choice.Possible) {
        newTotal += choice.value
      }
    })
    setTotal(newTotal)
  }

  const updateSum = () => {
    let newSum = 0
    for (let i = 0; i < 6; i++) {
      possibleChoices[i].value.forEach((dice) => {
        newSum += dice
      })
    }
    console.log(newSum)
    setSum(newSum)
    if (newSum >= 63) {
      setBonus(50)
      setTotal(total + 50)
    }
  }
  
  const selectNumbers = (selected) => {
    possibleChoices[selected - 1].Possible = false
    let newDice = [...dice]
    newDice = newDice.filter((dice) => dice === selected)
    while (newDice.length < 5) {
      newDice.push(0)
    }
    possibleChoices[selected - 1].setValue(newDice)
    possibleChoices[selected - 1].value = newDice
    setDice([1, 2, 3, 4, 5])
    updateSum()
    updateTotal()
  } 

  return (
    <>
      <Header />
      <main className="gameArea">
        <section className="game">
          <section className="leftSection">
            <Sum Sum={sum}/>
            <Ones Ones={ones} selectNumbers={selectNumbers} couldSelect={couldSelect}/>
            <Twos Twos={twos} selectNumbers={selectNumbers} couldSelect={couldSelect}/>
            <Threes Threes={threes} selectNumbers={selectNumbers} couldSelect={couldSelect}/>
            <Fours Fours={fours} selectNumbers={selectNumbers} couldSelect={couldSelect}/>
            <Fives Fives={fives} selectNumbers={selectNumbers} couldSelect={couldSelect}/>
            <Sixes Sixes={sixes} selectNumbers={selectNumbers} couldSelect={couldSelect}/>
            <Bonus Bonus={bonus} selectNumbers={selectNumbers} couldSelect={couldSelect}/>
          </section>
          <section className="rightSection">
            <Pair Pair={pair} setPair={setPair}/>
            <TwoPairs TwoPairs={twoPairs} setTwoPairs={setTwoPairs}/>
            <ThreeOfAKind ThreeOfAKind={threeOfAKind} setThreeOfAKind={setThreeOfAKind}/>
            <FourOfAKind FourOfAKind={fourOfAKind} setFourOfAKind={setFourOfAKind}/>
            <SmallStraight SmallStraight={smallStraight} setSmallStraight={setSmallStraight}/>
            <LargeStraight LargeStraight={largeStraight} setLargeStraight={setLargeStraight}/>
            <FullHouse FullHouse={fullHouse} setFullHouse={setFullHouse}/>
            <Chance Chance={chance} setChance={setChance}/>
            <Yatzy Yatzy={yatzy} setYatzy={setYatzy}/>
            <Total Total={total} setTotal={setTotal}/>
          </section>
        </section>
        <GameActions rollsLeft={rollsLeft} setRollsLeft={setRollsLeft} dice={dice} setDice={setDice} holdDice={holdDice} setHoldDice={setHoldDice} rollDice={rollDice}/>
      </main>
    </>
  )
}

export default App
