export default function Pair({Pair}) {
    return (
        <article>
            <span>One pair</span>
            <div className="dices">
                <img src={`src/assets/dice-${Pair[0]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Pair[1]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Pair[2]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Pair[3]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Pair[4]}.png`} alt="Dice" />
            </div>
        </article>
    )
}