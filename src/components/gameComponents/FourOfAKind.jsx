export default function FourOfAKind({FourOfAKind}) {
    return (
        <article>
            <span>Four of a kind</span>
            <div className="dices">
                <img src={`src/assets/dice-${FourOfAKind[0]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${FourOfAKind[1]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${FourOfAKind[2]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${FourOfAKind[3]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${FourOfAKind[4]}.png`} alt="Dice" />
            </div>
        </article>
    )
}