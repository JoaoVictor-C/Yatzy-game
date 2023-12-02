export default function Fours({Fours, selectNumbers, couldSelect, possibleChoices}) {
    return (
        <article>
        <span style={{display: "none"}}>(+<span id="TotalFours"></span>)</span>
        <span>Fours</span>
        <div className={`dices ${possibleChoices[3].Possible ? "Possible" : ""}`} onClick={
                () => {
                    if (couldSelect) {
                        let value = selectNumbers(4)
                        if (value === 0) {
                            return
                        }
                        document.querySelector("#TotalFours").innerHTML = value
                        document.querySelector("#TotalFours").parentElement.style.display = "inline-block"
                    } else {
                        document.querySelector(".rollDice").classList.add("AnimationWarning")
                        setTimeout(() => {
                            document.querySelector(".rollDice").classList.remove("AnimationWarning")
                        }, 2000)
                    }
                }
            }>
                <img src={`src/assets/dice-${Fours[0]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Fours[1]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Fours[2]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Fours[3]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Fours[4]}.png`} alt="Dice" />
            </div>
    </article>
    )
}
