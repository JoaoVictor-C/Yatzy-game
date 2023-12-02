export default function Ones({Ones, selectNumbers, couldSelect, possibleChoices}) {
    return (
        <article>
            <span style={{display: "none"}}>(+<span id="TotalOnes"></span>)</span>
            <span>Ones</span>
            <div className={`dices ${possibleChoices[0].Possible ? "Possible" : ""}`} onClick={
                () => {
                    if (couldSelect) {
                        let value = selectNumbers(1)
                        if (value === 0) {
                            return
                        }
                        document.querySelector("#TotalOnes").innerHTML = value
                        document.querySelector("#TotalOnes").parentElement.style.display = "inline-block"
                    } else {
                        document.querySelector(".rollDice").classList.add("AnimationWarning")
                        setTimeout(() => {
                            document.querySelector(".rollDice").classList.remove("AnimationWarning")
                        }, 2000)
                    }
                }
            }>
                <img src={`src/assets/dice-${Ones[0]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Ones[1]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Ones[2]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Ones[3]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Ones[4]}.png`} alt="Dice" />
            </div>
        </article>
    )
}