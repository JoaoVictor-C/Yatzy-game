export default function Fives({Fives}) {
    return (
        <article>
        <span>Fives</span>
        <div className="dices">
            <img src={`src/assets/dice-${Fives[0]}.png`} alt="Dice" />
            <img src={`src/assets/dice-${Fives[1]}.png`} alt="Dice" />
            <img src={`src/assets/dice-${Fives[2]}.png`} alt="Dice" />
            <img src={`src/assets/dice-${Fives[3]}.png`} alt="Dice" />
            <img src={`src/assets/dice-${Fives[4]}.png`} alt="Dice" />
        </div>
    </article>
    )
}