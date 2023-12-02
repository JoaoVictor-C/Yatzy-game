export default function Threes({Threes, selectNumbers, couldSelect, possibleChoices}) {
    return (
        <article>
            <span style={{visibility: "hidden"}}>(+<span id="TotalThrees"></span>)</span>
            <span>Threes</span>
            <div className={`dices ${possibleChoices[2].Possible ? "Possible" : ""}`} onClick={
                () => {
                    if (couldSelect) {
                        let value = selectNumbers(3)
                        if (value === 0) {
                            return
                        }
                        document.querySelector("#TotalThrees").innerHTML = value
                        document.querySelector("#TotalThrees").parentElement.style.visi
                    } else {
                        document.querySelector(".rollDice").classList.add("AnimationWarning")
                        setTimeout(() => {
                            document.querySelector(".rollDice").classList.remove("AnimationWarning")
                        }, 2000)
                    }
                }
            }>
                <img src={`src/assets/dice-${Threes[0]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Threes[1]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Threes[2]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Threes[3]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Threes[4]}.png`} alt="Dice" />
            </div>
        </article>
    )
}
