export default function SmallStraight({SmallStraight}) {
    return (
        <article>
            <span>Small straight</span>
            <div className="dices">
                <img src={`src/assets/dice-${SmallStraight[0]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${SmallStraight[1]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${SmallStraight[2]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${SmallStraight[3]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${SmallStraight[4]}.png`} alt="Dice" />
            </div>
        </article>
    )
}