export default function SmallStraight({SmallStraight, checkSmallStraight, couldSelect, possibleChoices}) {
    return (
        <article>
            <span style={{display: "none"}}>(+<span id="TotalSmallStraight"></span>)</span>
            <span>SmallStraight</span>
            <div className={`dices ${possibleChoices[8].Possible ? "Possible" : ""}`} onClick={
                () => {
                    if (couldSelect) {
                        let value = checkSmallStraight()
                        if (value === 0) {
                            return
                        }
                        document.querySelector("#TotalSmallStraight").innerHTML = value
                        document.querySelector("#TotalSmallStraight").parentElement.style.display = "inline-block"
                    } else {
                        document.querySelector(".rollDice").classList.add("AnimationWarning")
                        setTimeout(() => {
                            document.querySelector(".rollDice").classList.remove("AnimationWarning")
                        }, 2000)
                    }
                }
            }>
                <img src={`src/assets/dice-${SmallStraight[0]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${SmallStraight[1]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${SmallStraight[2]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${SmallStraight[3]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${SmallStraight[4]}.png`} alt="Dice" />
            </div>
        </article>
    )
}