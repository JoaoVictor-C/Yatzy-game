export default function ThreeOfAKind({ThreeOfAKind, checkThreeOfAKind, couldSelect, possibleChoices}) {
    return (
        <article>
            <span style={{visibility: "hidden"}}>(+<span id="TotalThreeOfAKind"></span>)</span>
            <span>ThreeOfAKind</span>
            <div className={`dices ${possibleChoices[6].Possible ? "Possible" : ""}`} onClick={
                () => {
                    if (couldSelect) {
                        let value = checkThreeOfAKind()
                        if (value === 0) {
                            return
                        }
                        document.querySelector("#TotalThreeOfAKind").innerHTML = value
                        document.querySelector("#TotalThreeOfAKind").parentElement.style.visibility = "visible"
                    } else {
                        document.querySelector(".rollDice").classList.add("AnimationWarning")
                        setTimeout(() => {
                            document.querySelector(".rollDice").classList.remove("AnimationWarning")
                        }, 2000)
                    }
                }
            }>
                <img src={`src/assets/dice-${ThreeOfAKind[0]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${ThreeOfAKind[1]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${ThreeOfAKind[2]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${ThreeOfAKind[3]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${ThreeOfAKind[4]}.png`} alt="Dice" />
            </div>
        </article>
    )
}
