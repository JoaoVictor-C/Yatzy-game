export default function GameActions({rollsLeft, dice, setDice, holdDice, setHoldDice, rollDice, setCouldSelect, couldSelect}) {
    return (
        <div className="gameActions">
            <button className="rollDice" onClick={() => { 
                rollDice()
                setCouldSelect(true)
             }} 
            >Roll</button>
            <div className="dicesAction">
                <img src={`src/assets/dice-${dice[0]}.png`} alt="Dice" className={`diceAction ${holdDice[0] ? "diceAction-Selected" : ""}`} onClick={() => {
                    if (!couldSelect) {
                        document.querySelector(".rollDice").classList.add("AnimationWarning")
                        setTimeout(() => {
                            document.querySelector(".rollDice").classList.remove("AnimationWarning")
                        }, 2000)
                        return
                    }
                    if (!holdDice[0]) {
                        holdDice[0] = true
                    } else {
                        holdDice[0] = false
                    }
                    setHoldDice([...holdDice])
                }}/>
                <img src={`src/assets/dice-${dice[1]}.png`} alt="Dice" className={`diceAction ${holdDice[1] ? "diceAction-Selected" : ""}`} onClick={() => {
                    if (!couldSelect) {
                        document.querySelector(".rollDice").classList.add("AnimationWarning")
                        setTimeout(() => {
                            document.querySelector(".rollDice").classList.remove("AnimationWarning")
                        }, 2000)
                        return
                    }
                    if (!holdDice[1]) {
                        holdDice[1] = true
                    } else {
                        holdDice[1] = false
                    }
                    setHoldDice([...holdDice])
                }}/>
                <img src={`src/assets/dice-${dice[2]}.png`} alt="Dice" className={`diceAction ${holdDice[2] ? "diceAction-Selected" : ""}`} onClick={() => {
                    if (!couldSelect) {
                        document.querySelector(".rollDice").classList.add("AnimationWarning")
                        setTimeout(() => {
                            document.querySelector(".rollDice").classList.remove("AnimationWarning")
                        }, 2000)
                        return
                    }
                    if (!holdDice[2]) {
                        holdDice[2] = true
                    } else {
                        holdDice[2] = false
                    }
                    setHoldDice([...holdDice])
                }}/>
                <img src={`src/assets/dice-${dice[3]}.png`} alt="Dice" className={`diceAction ${holdDice[3] ? "diceAction-Selected" : ""}`} onClick={() => {
                    if (!couldSelect) {
                        document.querySelector(".rollDice").classList.add("AnimationWarning")
                        setTimeout(() => {
                            document.querySelector(".rollDice").classList.remove("AnimationWarning")
                        }, 2000)
                        return
                    }
                    if (!holdDice[3]) {
                        holdDice[3] = true
                    } else {
                        holdDice[3] = false
                    }
                    setHoldDice([...holdDice])
                }}/>
                <img src={`src/assets/dice-${dice[4]}.png`} alt="Dice" className={`diceAction ${holdDice[4] ? "diceAction-Selected" : ""}`} onClick={() => {
                    if (!couldSelect) {
                        document.querySelector(".rollDice").classList.add("AnimationWarning")
                        setTimeout(() => {
                            document.querySelector(".rollDice").classList.remove("AnimationWarning")
                        }, 2000)
                        return
                    }
                    if (!holdDice[4]) {
                        holdDice[4] = true
                    } else {
                        holdDice[4] = false
                    }
                    setHoldDice([...holdDice])
                }}/>
            </div>
            <span className="rollsLeft">Rolls left: {rollsLeft}</span>
        </div>
    );
}