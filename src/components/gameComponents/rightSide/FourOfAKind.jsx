export default function FourOfAKind({FourOfAKind, checkFourOfAKind, couldSelect, possibleChoices}) {
    return (
        <article>
            <span style={{display: "none"}}>(+<span id="TotalFourOfAKind"></span>)</span>
            <span>FourOfAKind</span>
            <div className={`dices ${possibleChoices[7].Possible ? "Possible" : ""}`} onClick={
                () => {
                    if (couldSelect) {
                        let value = checkFourOfAKind()
                        if (value === 0) {
                            return
                        }
                        document.querySelector("#TotalFourOfAKind").innerHTML = value
                        document.querySelector("#TotalFourOfAKind").parentElement.style.display = "inline-block"
                    } else {
                        document.querySelector(".rollDice").classList.add("AnimationWarning")
                        setTimeout(() => {
                            document.querySelector(".rollDice").classList.remove("AnimationWarning")
                        }, 2000)
                    }
                }
            }>
                <img src={`src/assets/dice-${FourOfAKind[0]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${FourOfAKind[1]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${FourOfAKind[2]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${FourOfAKind[3]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${FourOfAKind[4]}.png`} alt="Dice" />
            </div>
        </article>
    )
}