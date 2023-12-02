export default function Twos({Twos, selectNumbers, couldSelect, possibleChoices}) {
    return (
        <article>
        <span style={{display: "none"}}>(+<span id="TotalTwos"></span>)</span>
        <span>Twos</span>
        <div className={`dices ${possibleChoices[1].Possible ? "Possible" : ""}`} onClick={
                () => {
                    if (couldSelect) {
                        let value = selectNumbers(2)
                        if (value === 0) {
                            return
                        }
                        document.querySelector("#TotalTwos").innerHTML = value
                        document.querySelector("#TotalTwos").parentElement.style.display = "inline-block"
                    } else {
                        document.querySelector(".rollDice").classList.add("AnimationWarning")
                        setTimeout(() => {
                            document.querySelector(".rollDice").classList.remove("AnimationWarning")
                        }, 2000)
                    }
                }
            }>
                <img src={`src/assets/dice-${Twos[0]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Twos[1]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Twos[2]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Twos[3]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Twos[4]}.png`} alt="Dice" />
                <p style={{display:"none"}}>(+<span id="valueTwos"></span>)</p>
            </div>
    </article>
    )
}