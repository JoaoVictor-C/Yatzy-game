export default function Chance({Chance}) {
    return (
        <article>
            <span>Chance</span>
            <div className="dices">
                <img src={`src/assets/dice-${Chance[0]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Chance[1]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Chance[2]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Chance[3]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Chance[4]}.png`} alt="Dice" />
            </div>
        </article>
    )
}