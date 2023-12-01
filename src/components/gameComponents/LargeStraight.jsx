export default function LargeStraight({LargeStraight}) {
    return (
        <article>
            <span>Large straight</span>
            <div className="dices">
                <img src={`src/assets/dice-${LargeStraight[0]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${LargeStraight[1]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${LargeStraight[2]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${LargeStraight[3]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${LargeStraight[4]}.png`} alt="Dice" />
            </div>
        </article>
    )
}