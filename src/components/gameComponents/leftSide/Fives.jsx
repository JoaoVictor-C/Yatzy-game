export default function Fives({Fives, selectNumbers, couldSelect, possibleChoices}) {
    return (
        <article>
        <span style={{display: "none"}}>(+<span id="TotalFives"></span>)</span>
        <span>Fives</span>
        <div className={`dices ${possibleChoices[4].Possible ? "Possible" : ""}`} onClick={
                () => {
                    if (couldSelect) {
                        let value = selectNumbers(5)
                        if (value === 0) {
                            return
                        }
                        document.querySelector("#TotalFives").innerHTML = value
                        document.querySelector("#TotalFives").parentElement.style.display = "inline-block"
                    } else {
                        document.querySelector(".rollDice").classList.add("AnimationWarning")
                        setTimeout(() => {
                            document.querySelector(".rollDice").classList.remove("AnimationWarning")
                        }, 2000)
                    }
                }
            }>
                <img src={`src/assets/dice-${Fives[0]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Fives[1]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Fives[2]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Fives[3]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Fives[4]}.png`} alt="Dice" />
            </div>
    </article>
    )
}