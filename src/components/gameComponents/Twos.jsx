export default function Twos({Twos}) {
    return (
        <article>
        <span>Twos</span>
        <div className="dices">
            <img src={`src/assets/dice-${Twos[0]}.png`} alt="Dice" />
            <img src={`src/assets/dice-${Twos[1]}.png`} alt="Dice" />
            <img src={`src/assets/dice-${Twos[2]}.png`} alt="Dice" />
            <img src={`src/assets/dice-${Twos[3]}.png`} alt="Dice" />
            <img src={`src/assets/dice-${Twos[4]}.png`} alt="Dice" />
        </div>
    </article>
    )
}