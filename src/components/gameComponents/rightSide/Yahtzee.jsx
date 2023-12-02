export default function Yahtzee({Yahtzee, checkYahtzee, couldSelect, possibleChoices}) { 
    return (
        <article>
            <span style={{display: "none"}}>(+<span id="TotalYahtzee"></span>)</span>
            <span>Yahtzee</span>
            <div className={`dices ${possibleChoices[12].Possible ? "Possible" : ""}`} onClick={
                () => {
                    if (couldSelect) {
                        let value = checkYahtzee()
                        if (value === 0) {
                            return
                        }
                        document.querySelector("#TotalYahtzee").innerHTML = value
                        document.querySelector("#TotalYahtzee").parentElement.style.display = "inline-block"
                    } else {
                        document.querySelector(".rollDice").classList.add("AnimationWarning")
                        setTimeout(() => {
                            document.querySelector(".rollDice").classList.remove("AnimationWarning")
                        }, 2000)
                    }
                }
            }>
                <img src={`src/assets/dice-${Yahtzee[0]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Yahtzee[1]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Yahtzee[2]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Yahtzee[3]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Yahtzee[4]}.png`} alt="Dice" />
            </div>
        </article>
    )
}