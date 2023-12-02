export default function Sixes({Sixes, selectNumbers, couldSelect, possibleChoices}) {
    return (
        <article>
            <span style={{display: "none"}}>(+<span id="TotalSixes"></span>)</span>
            <span>Sixes</span>
            <div className={`dices ${possibleChoices[5].Possible ? "Possible" : ""}`} onClick={
                    () => {
                        if (couldSelect) {
                            let value = selectNumbers(6)
                            if (value === 0) {
                                return
                            }
                            document.querySelector("#TotalSixes").innerHTML = value
                            document.querySelector("#TotalSixes").parentElement.style.display = "inline-block"
                        } else {
                            document.querySelector(".rollDice").classList.add("AnimationWarning")
                            setTimeout(() => {
                                document.querySelector(".rollDice").classList.remove("AnimationWarning")
                            }, 2000)
                        }
                    }
                }>
                    <img src={`src/assets/dice-${Sixes[0]}.png`} alt="Dice" />
                    <img src={`src/assets/dice-${Sixes[1]}.png`} alt="Dice" />
                    <img src={`src/assets/dice-${Sixes[2]}.png`} alt="Dice" />
                    <img src={`src/assets/dice-${Sixes[3]}.png`} alt="Dice" />
                    <img src={`src/assets/dice-${Sixes[4]}.png`} alt="Dice" />
                </div>
        </article> 
    )
}