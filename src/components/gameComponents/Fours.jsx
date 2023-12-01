export default function Fours({Fours}) {
    return (
        <article>
        <span>Fours</span>
        <div className="dices">
            <img src={`src/assets/dice-${Fours[0]}.png`} alt="Dice" />
            <img src={`src/assets/dice-${Fours[1]}.png`} alt="Dice" />
            <img src={`src/assets/dice-${Fours[2]}.png`} alt="Dice" />
            <img src={`src/assets/dice-${Fours[3]}.png`} alt="Dice" />
            <img src={`src/assets/dice-${Fours[4]}.png`} alt="Dice" />
        </div>
    </article>
    )
}
