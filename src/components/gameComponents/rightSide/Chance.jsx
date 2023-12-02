export default function Chance({Chance, checkChance, couldSelect, possibleChoices}) {
    return (
        <article>
            <span style={{display: "none"}}>(+<span id="TotalChance"></span>)</span>
            <span>Chance</span>
            <div className={`dices ${possibleChoices[11].Possible ? "Possible" : ""}`} onClick={
                () => {
                    if (couldSelect) {
                        let value = checkChance()
                        if (value === 0 || value === false) {
                            return
                        }
                        document.querySelector("#TotalChance").innerHTML = value
                        document.querySelector("#TotalChance").parentElement.style.display = "inline-block"
                    } else {
                        document.querySelector(".rollDice").classList.add("AnimationWarning")
                        setTimeout(() => {
                            document.querySelector(".rollDice").classList.remove("AnimationWarning")
                        }, 2000)
                    }
                }
            }>
                <img src={`src/assets/dice-${Chance[0]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Chance[1]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Chance[2]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Chance[3]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Chance[4]}.png`} alt="Dice" />
            </div>
        </article>
    )
}