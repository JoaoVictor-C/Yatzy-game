import './App.css'
import Header from './components/Header'
import GameActions from './components/GameActions'
import Ones from './components/gameComponents/leftSide/Ones'
import Twos from './components/gameComponents/leftSide/Twos'
import Threes from './components/gameComponents/leftSide/Threes'
import Fours from './components/gameComponents/leftSide/Fours'
import Fives from './components/gameComponents/leftSide/Fives'
import Sixes from './components/gameComponents/leftSide/Sixes'
import Sum from './components/gameComponents/Sum'
import Bonus from './components/gameComponents/Bonus'
import ThreeOfAKind from './components/gameComponents/rightSide/ThreeOfAKind'
import FourOfAKind from './components/gameComponents/rightSide/FourOfAKind'
import SmallStraight from './components/gameComponents/rightSide/SmallStraight'
import LargeStraight from './components/gameComponents/rightSide/LargeStraight'
import FullHouse from './components/gameComponents/rightSide/FullHouse'
import Chance from './components/gameComponents/rightSide/Chance'
import Yahtzee from './components/gameComponents/rightSide/Yahtzee'
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
  const [threeOfAKind, setThreeOfAKind] = useState([0, 0, 0, 0, 0])
  const [fourOfAKind, setFourOfAKind] = useState([0, 0, 0, 0, 0])
  const [smallStraight, setSmallStraight] = useState([0, 0, 0, 0, 0])
  const [largeStraight, setLargeStraight] = useState([0, 0, 0, 0, 0])
  const [fullHouse, setFullHouse] = useState([0, 0, 0, 0, 0])
  const [chance, setChance] = useState([0, 0, 0, 0, 0])
  const [yahtzee, setYahtzee] = useState([0, 0, 0, 0, 0])
  
  const rollDice = () => {
    if (rollsLeft > 0) {
      const newDice = []
      for (let i = 0; i < 5; i++) {
        if (holdDice[i]) {
          newDice.push(dice[i])
        } else {
          newDice.push(Math.floor(Math.random() * 6) + 1)
        }
      }
      setDice(newDice)
      setRollsLeft(rollsLeft - 1)
      checkAll(newDice)
      checkEndGame(-1)
    }
  }

  const newGame = () => {
    setHoldDice([false, false, false, false, false])
    setDice([1, 2, 3, 4, 5])
    setCouldSelect(false)
    setRollsLeft(3)
    setSum(0)
    setBonus(0)
    setTotal(0)
    setOnes([0, 0, 0, 0, 0])
    setTwos([0, 0, 0, 0, 0])
    setThrees([0, 0, 0, 0, 0])
    setFours([0, 0, 0, 0, 0])
    setFives([0, 0, 0, 0, 0])
    setSixes([0, 0, 0, 0, 0])
    setThreeOfAKind([0, 0, 0, 0, 0])
    setFourOfAKind([0, 0, 0, 0, 0])
    setSmallStraight([0, 0, 0, 0, 0])
    setLargeStraight([0, 0, 0, 0, 0])
    setFullHouse([0, 0, 0, 0, 0])
    setChance([0, 0, 0, 0, 0])
    setYahtzee([0, 0, 0, 0, 0])
    let newPossibleChoices = [...possibleChoices]
    for (let i = 0; i < newPossibleChoices.length; i++) {
      newPossibleChoices[i].value = [0, 0, 0, 0, 0]
      newPossibleChoices[i].Possible = false
    }
    setPossibleChoices(newPossibleChoices)
    document.querySelector(".endGame").classList.remove("AnimationEndGame")
    document.querySelector(".endGame").style.display = "none"
  }

  let [possibleChoices, setPossibleChoices] = useState([
    { name: 'Ones', value: ones, setValue: setOnes, Possible: false },
    { name: 'Twos', value: twos, setValue: setTwos, Possible: false },
    { name: 'Threes', value: threes, setValue: setThrees, Possible: false },
    { name: 'Fours', value: fours, setValue: setFours, Possible: false },
    { name: 'Fives', value: fives, setValue: setFives, Possible: false },
    { name: 'Sixes', value: sixes, setValue: setSixes, Possible: false },
    { name: 'ThreeOfAKind', value: threeOfAKind, setValue: setThreeOfAKind, Possible: false },
    { name: 'FourOfAKind', value: fourOfAKind, setValue: setFourOfAKind, Possible: false },
    { name: 'SmallStraight', value: smallStraight, setValue: setSmallStraight, Possible: false },
    { name: 'LargeStraight', value: largeStraight, setValue: setLargeStraight, Possible: false },
    { name: 'FullHouse', value: fullHouse, setValue: setFullHouse, Possible: false },
    { name: 'Chance', value: chance, setValue: setChance, Possible: false },
    { name: 'Yahtzee', value: Yahtzee, setValue: setYahtzee, Possible: false },
  ])

  const updateTotal = (valueRight, valueLeft) => {
    let newTotal = valueRight + valueLeft + total
    let newSum = valueLeft + sum 
    setSum(newSum)
    if (newSum >= 63 && bonus === 0) {
      newTotal += 35
      setBonus(35)
    }
    setTotal(newTotal)
  }

  const resetVariables = () => {
    setHoldDice([false, false, false, false, false])
    setRollsLeft(3)
    setCouldSelect(false)
  }
  
  const selectNumbers = (selected) => {
    let newDice = [...dice]
    newDice = newDice.filter((dice) => dice === selected)
    if (newDice.length === 0 || possibleChoices[selected - 1].value[0] !== 0) {
      return 0
    }
    while (newDice.length < 5) {
      newDice.push(0)
    }
    possibleChoices[selected - 1].setValue(newDice)
    possibleChoices[selected - 1].value = newDice
    const sumDices = newDice.reduce((a, b) => a + b, 0)
    updateTotal(0, sumDices)
    resetVariables()
    possibleChoices[selected - 1].Possible = false
    setPossibleChoices(possibleChoices)
    return sumDices
  } 

  const checkThreeOfAKind = () => {
    let newDice = [...dice]
    newDice.sort()
    let newThreeOfAKind = [0, 0, 0, 0, 0]
    for (let i = 0; i < 3; i++) {
      if (newDice[i] === newDice[i + 1] && newDice[i] === newDice[i + 2]) {
        newThreeOfAKind = newDice
        break
      }
    }
    if (threeOfAKind[0] != 0 || possibleChoices[6].value[0] != 0 || newThreeOfAKind[0] === 0) {
      return 0
    }
    possibleChoices[6].setValue(newThreeOfAKind)
    possibleChoices[6].value = newThreeOfAKind
    const sumDices = newThreeOfAKind.reduce((a, b) => a + b, 0)
    updateTotal(sumDices, 0)
    resetVariables()
    possibleChoices[6].Possible = false
    setPossibleChoices(possibleChoices)
    return sumDices
  }

  const checkFourOfAKind = () => {
    let newDice = [...dice]
    newDice.sort()
    let newFourOfAKind = [0, 0, 0, 0, 0]
    for (let i = 0; i < 2; i++) {
      if (newDice[i] === newDice[i + 1] && newDice[i] === newDice[i + 2] && newDice[i] === newDice[i + 3]) {
        newFourOfAKind = newDice
        break
      }
    }
    if (fourOfAKind[0] != 0 || possibleChoices[7].value[0] != 0 || newFourOfAKind[0] === 0) {
      return 0
    }
    possibleChoices[7].setValue(newFourOfAKind)
    possibleChoices[7].value = newFourOfAKind
    const sumDices = newFourOfAKind.reduce((a, b) => a + b, 0)
    updateTotal(sumDices, 0)
    resetVariables()
    possibleChoices[7].Possible = false
    setPossibleChoices(possibleChoices)
    return sumDices
  }

  const checkSmallStraight = () => {
    let newDice = [...dice]
    newDice.sort()
    let newSmallStraight = [0, 0, 0, 0, 0]
    for (let i = 0; i < 2; i++) {
      if (newDice[i] === newDice[i + 1] - 1 && newDice[i] === newDice[i + 2] - 2 && newDice[i] === newDice[i + 3] - 3) {
        newSmallStraight = newDice
        break
      }
    }
    if (smallStraight[0] != 0 || possibleChoices[8].value[0] != 0 || newSmallStraight[0] === 0) {
      return 0
    }
    possibleChoices[8].setValue(newSmallStraight)
    possibleChoices[8].value = newSmallStraight
    updateTotal(30, 0)
    resetVariables()
    possibleChoices[8].Possible = false
    setPossibleChoices(possibleChoices)
    return 30
  }

  const checkLargeStraight = () => {
    let newDice = [...dice]
    newDice.sort()
    let newLargeStraight = [0, 0, 0, 0, 0]
    for (let i = 0; i < 1; i++) {
      if (newDice[i] === newDice[i + 1] - 1 && newDice[i] === newDice[i + 2] - 2 && newDice[i] === newDice[i + 3] - 3 && newDice[i] === newDice[i + 4] - 4) {
        newLargeStraight = newDice
        break
      }
    }
    if (largeStraight[0] != 0 || possibleChoices[9].value[0] != 0 || newLargeStraight[0] === 0) {
      return 0
    }
    possibleChoices[9].setValue(newLargeStraight)
    possibleChoices[9].value = newLargeStraight
    updateTotal(40, 0)
    resetVariables()
    possibleChoices[9].Possible = false
    setPossibleChoices(possibleChoices)
    return 40
  }

  const checkFullHouse = () => {
    let newDice = [...dice]
    newDice.sort()
    let newFullHouse = [0, 0, 0, 0, 0]
    if (newDice[0] === newDice[1] && newDice[0] === newDice[2] && newDice[3] === newDice[4]) {
      newFullHouse = newDice
    } else if (newDice[0] === newDice[1] && newDice[2] === newDice[3] && newDice[2] === newDice[4]) {
      newFullHouse = newDice
    }
    if (fullHouse[0] != 0 || possibleChoices[10].value[0] != 0 || newFullHouse[0] === 0) {
      return 0
    }
    possibleChoices[10].setValue(newFullHouse)
    possibleChoices[10].value = newFullHouse
    updateTotal(25, 0)
    resetVariables()
    possibleChoices[10].Possible = false
    setPossibleChoices(possibleChoices)
    return 25
  }

  const checkChance = () => {
    let newDice = [...dice]
    newDice.sort()
    if (chance[0] != 0 || possibleChoices[11].value[0] != 0) {
      return 0
    }
    possibleChoices[11].setValue(newDice)
    possibleChoices[11].value = newDice
    const sumDices = newDice.reduce((a, b) => a + b, 0)
    updateTotal(sumDices, 0)
    resetVariables()
    possibleChoices[11].Possible = false
    setPossibleChoices(possibleChoices)
    return sumDices
  }

  const checkYahtzee = () => {
    let newDice = [...dice]
    newDice.sort()
    let newYathzee = [0, 0, 0, 0, 0]
    if (newDice[0] === newDice[1] && newDice[0] === newDice[2] && newDice[0] === newDice[3] && newDice[0] === newDice[4]) {
      newYathzee = newDice
    }
    if (yahtzee[0] != 0 || possibleChoices[12].value[0] != 0 || newYathzee[0] === 0) {
      return 0
    }
    possibleChoices[12].setValue(newYathzee)
    possibleChoices[12].value = newYathzee
    updateTotal(50, 0)
    resetVariables()
    possibleChoices[12].Possible = false
    
    return 50
  }

  const checkEndGame = (value) => {
    let endGame = true
    for (let i = 0; i < possibleChoices.length; i++) {
      if (possibleChoices[i].Possible) {
        endGame = false
        break
      }
    }
    if (endGame) {
      document.querySelector(".endGame").style.display = "flex"
      document.querySelector(".endGame").classList.add("AnimationEndGame")
    } else {
      document.querySelector(".endGame").style.display = "none"
    }
  }


  const checkAll = (Dice) => {
    // Verifica quais opções o jogador pode selecionar e torna o Possible = true
    // Irá ver não só se a opção não tem nada como também irá verificar se ele poderia selecionar a opção

    const newPossibleChoices = [...possibleChoices]
    const newDice = [...Dice]

    console.log(Dice)
    newDice.sort()
    let newOnes = [0, 0, 0, 0, 0]
    let newTwos = [0, 0, 0, 0, 0]
    let newThrees = [0, 0, 0, 0, 0]
    let newFours = [0, 0, 0, 0, 0]
    let newFives = [0, 0, 0, 0, 0]
    let newSixes = [0, 0, 0, 0, 0]
    
    // Verifica se o jogador pode selecionar Ones
    if (ones[0] === 0) {
      newOnes = newDice.filter((Dice) => Dice === 1)
      if (newOnes.length > 0) {
        newPossibleChoices[0].Possible = true
      } else {
        newPossibleChoices[0].Possible = false
      }
    } else {
      newPossibleChoices[0].Possible = false
    }

    // Verifica se o jogador pode selecionar Twos
    if (twos[0] === 0) {
      newTwos = newDice.filter((Dice) => Dice === 2)
      if (newTwos.length > 0) {
        newPossibleChoices[1].Possible = true
      } else {
        newPossibleChoices[1].Possible = false
      }
    } else {
      newPossibleChoices[1].Possible = false
    }

    // Verifica se o jogador pode selecionar Threes
    if (threes[0] === 0) {
      newThrees = newDice.filter((Dice) => Dice === 3)
      if (newThrees.length > 0) {
        newPossibleChoices[2].Possible = true
      } else {
        newPossibleChoices[2].Possible = false
      }
    } else {
      newPossibleChoices[2].Possible = false
    }

    // Verifica se o jogador pode selecionar Fours
    if (fours[0] === 0) {
      newFours = newDice.filter((Dice) => Dice === 4)
      if (newFours.length > 0) {
        newPossibleChoices[3].Possible = true
      } else {
        newPossibleChoices[3].Possible = false
      }
    } else {
      newPossibleChoices[3].Possible = false
    }

    // Verifica se o jogador pode selecionar Fives
    if (fives[0] === 0) {
      newFives = newDice.filter((Dice) => Dice === 5)
      if (newFives.length > 0) {
        newPossibleChoices[4].Possible = true
      } else {
        newPossibleChoices[4].Possible = false
      }
    } else {
      newPossibleChoices[4].Possible = false
    }

    // Verifica se o jogador pode selecionar Sixes
    if (sixes[0] === 0) {
      newSixes = newDice.filter((Dice) => Dice === 6)
      if (newSixes.length > 0) {
        newPossibleChoices[5].Possible = true
      } else {
        newPossibleChoices[5].Possible = false
      }
    } else {
      newPossibleChoices[5].Possible = false
    }

    // Verifica se o jogador pode selecionar ThreeOfAKind
    if (threeOfAKind[0] === 0) {
      for (let i = 0; i < 3; i++) {
        if (newDice[i] === newDice[i + 1] && newDice[i] === newDice[i + 2]) {
          newPossibleChoices[6].Possible = true
          break
        } else {
          newPossibleChoices[6].Possible = false
        }
      }
    } else {
      newPossibleChoices[6].Possible = false
    }

    // Verifica se o jogador pode selecionar FourOfAKind
    if (fourOfAKind[0] === 0) {
      for (let i = 0; i < 2; i++) {
        if (newDice[i] === newDice[i + 1] && newDice[i] === newDice[i + 2] && newDice[i] === newDice[i + 3]) {
          newPossibleChoices[7].Possible = true
          break
        } else {
          newPossibleChoices[7].Possible = false
        }
      }
    } else {
      newPossibleChoices[7].Possible = false
    }

    // Verifica se o jogador pode selecionar SmallStraight
    if (smallStraight[0] === 0) {
      for (let i = 0; i < 2; i++) {
        if (newDice[i] === newDice[i + 1] - 1 && newDice[i] === newDice[i + 2] - 2 && newDice[i] === newDice[i + 3] - 3) {
          newPossibleChoices[8].Possible = true
          break
        } else {
          newPossibleChoices[8].Possible = false
        }
      }
    } else {
      newPossibleChoices[8].Possible = false
    }

    // Verifica se o jogador pode selecionar LargeStraight
    if (largeStraight[0] === 0) {
      for (let i = 0; i < 1; i++) {
        if (newDice[i] === newDice[i + 1] - 1 && newDice[i] === newDice[i + 2] - 2 && newDice[i] === newDice[i + 3] - 3 && newDice[i] === newDice[i + 4] - 4) {
          console.log("LargeStraight")
          console.log(newDice)
          newPossibleChoices[9].Possible = true
          break
        } else {
          newPossibleChoices[9].Possible = false
        }
      } 
    } else {
      newPossibleChoices[9].Possible = false
    }

    // Verifica se o jogador pode selecionar FullHouse
    if (fullHouse[0] === 0) {
      if (newDice[0] === newDice[1] && newDice[0] === newDice[2] && newDice[3] === newDice[4]) {
        newPossibleChoices[10].Possible = true
      } else if (newDice[0] === newDice[1] && newDice[2] === newDice[3] && newDice[2] === newDice[4]) {
        newPossibleChoices[10].Possible = true
      } else {
        newPossibleChoices[10].Possible = false
      }
    } else {
      newPossibleChoices[10].Possible = false
    }

    // Verifica se o jogador pode selecionar Chance
    if (chance[0] === 0) {
      newPossibleChoices[11].Possible = true
    } else {
      newPossibleChoices[11].Possible = false
    }

    // Verifica se o jogador pode selecionar Yahtzee
    if (yahtzee[0] === 0) {
      if (newDice[0] === newDice[1] && newDice[0] === newDice[2] && newDice[0] === newDice[3] && newDice[0] === newDice[4]) {
        newPossibleChoices[12].Possible = true
      } else {
        newPossibleChoices[12].Possible = false
      }
    } else {
      newPossibleChoices[12].Possible = false
    }

    setPossibleChoices(newPossibleChoices)
    checkEndGame(1)
  }

  return (
    <>
      <Header />
      <main className="gameArea">
        <section className="game">
          <section className="leftSection">
            <Ones Ones={ones} selectNumbers={selectNumbers} couldSelect={couldSelect} possibleChoices={possibleChoices}/>
            <Twos Twos={twos} selectNumbers={selectNumbers} couldSelect={couldSelect} possibleChoices={possibleChoices}/>
            <Threes Threes={threes} selectNumbers={selectNumbers} couldSelect={couldSelect} possibleChoices={possibleChoices}/>
            <Fours Fours={fours} selectNumbers={selectNumbers} couldSelect={couldSelect} possibleChoices={possibleChoices}/>
            <Fives Fives={fives} selectNumbers={selectNumbers} couldSelect={couldSelect} possibleChoices={possibleChoices}/>
            <Sixes Sixes={sixes} selectNumbers={selectNumbers} couldSelect={couldSelect} possibleChoices={possibleChoices}/>
            <Bonus Bonus={bonus}/>
            <Sum Sum={sum}/>
          </section>
          <section className="rightSection">
            <ThreeOfAKind ThreeOfAKind={threeOfAKind} checkThreeOfAKind={checkThreeOfAKind} couldSelect={couldSelect} possibleChoices={possibleChoices}/>
            <FourOfAKind FourOfAKind={fourOfAKind} checkFourOfAKind={checkFourOfAKind} couldSelect={couldSelect} possibleChoices={possibleChoices}/>
            <SmallStraight SmallStraight={smallStraight} checkSmallStraight={checkSmallStraight} couldSelect={couldSelect} possibleChoices={possibleChoices}/>
            <LargeStraight LargeStraight={largeStraight} checkLargeStraight={checkLargeStraight} couldSelect={couldSelect} possibleChoices={possibleChoices}/>
            <FullHouse FullHouse={fullHouse} checkFullHouse={checkFullHouse} couldSelect={couldSelect} possibleChoices={possibleChoices}/>
            <Chance Chance={chance} checkChance={checkChance} couldSelect={couldSelect} possibleChoices={possibleChoices}/>
            <Yahtzee Yahtzee={yahtzee} checkYahtzee={checkYahtzee} couldSelect={couldSelect} possibleChoices={possibleChoices}/>
            <Total Total={total}/>
          </section>
        </section>
        <GameActions rollsLeft={rollsLeft} setRollsLeft={setRollsLeft} dice={dice} setDice={setDice} holdDice={holdDice} setHoldDice={setHoldDice} rollDice={rollDice} setCouldSelect={setCouldSelect} couldSelect={couldSelect}/>
      </main>
      <div className="endGame">
        <h1>Game Over</h1>
        <span>
          Final score: <span id="TotalScore">{total}</span>
        </span>
        <button onClick={newGame}>New Game</button>
      </div>
    </>
  )
}

export default App
