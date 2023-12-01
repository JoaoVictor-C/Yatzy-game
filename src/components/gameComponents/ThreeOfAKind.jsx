export default function ThreeOfAKind({ThreeOfAKind}) {
    return (
        <article>
            <span>Three of a kind</span>
            <div className="dices">
                <img src={`src/assets/dice-${ThreeOfAKind[0]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${ThreeOfAKind[1]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${ThreeOfAKind[2]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${ThreeOfAKind[3]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${ThreeOfAKind[4]}.png`} alt="Dice" />
            </div>
        </article>
    )
}
