export default function FullHouse({FullHouse, checkFullHouse, couldSelect, possibleChoices}) {
    return (
        <article>
            <span style={{display: "none"}}>(+<span id="TotalFullHouse"></span>)</span>
            <span>FullHouse</span>
            <div className={`dices ${possibleChoices[10].Possible ? "Possible" : ""}`} onClick={
                () => {
                    if (couldSelect) {
                        let value = checkFullHouse()
                        if (value === 0) {
                            return
                        }
                        document.querySelector("#TotalFullHouse").innerHTML = value
                        document.querySelector("#TotalFullHouse").parentElement.style.display = "inline-block"
                    } else {
                        document.querySelector(".rollDice").classList.add("AnimationWarning")
                        setTimeout(() => {
                            document.querySelector(".rollDice").classList.remove("AnimationWarning")
                        }, 2000)
                    }
                }
            }>
                <img src={`src/assets/dice-${FullHouse[0]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${FullHouse[1]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${FullHouse[2]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${FullHouse[3]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${FullHouse[4]}.png`} alt="Dice" />
            </div>
        </article>
    )
}