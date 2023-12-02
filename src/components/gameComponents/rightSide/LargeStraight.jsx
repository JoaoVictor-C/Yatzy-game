export default function LargeStraight({LargeStraight, checkLargeStraight, couldSelect, possibleChoices}) {
    return (
        <article>
            <span style={{display: "none"}}>(+<span id="TotalLargeStraight"></span>)</span>
            <span>LargeStraight</span>
            <div className={`dices ${possibleChoices[9].Possible ? "Possible" : ""}`} onClick={
                () => {
                    if (couldSelect) {
                        let value = checkLargeStraight()
                        if (value === 0) {
                            return
                        }
                        document.querySelector("#TotalLargeStraight").innerHTML = value
                        document.querySelector("#TotalLargeStraight").parentElement.style.display = "inline-block"
                    } else {
                        document.querySelector(".rollDice").classList.add("AnimationWarning")
                        setTimeout(() => {
                            document.querySelector(".rollDice").classList.remove("AnimationWarning")
                        }, 2000)
                    }
                }
            }>
                <img src={`src/assets/dice-${LargeStraight[0]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${LargeStraight[1]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${LargeStraight[2]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${LargeStraight[3]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${LargeStraight[4]}.png`} alt="Dice" />
            </div>
        </article>
    )
}