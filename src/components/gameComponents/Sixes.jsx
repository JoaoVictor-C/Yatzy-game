export default function Sixes({Sixes}) {
    return (
        <article>
        <span>Sixes</span>
        <div className="dices">
            <img src={`src/assets/dice-${Sixes[0]}.png`} alt="Dice" />
            <img src={`src/assets/dice-${Sixes[1]}.png`} alt="Dice" />
            <img src={`src/assets/dice-${Sixes[2]}.png`} alt="Dice" />
            <img src={`src/assets/dice-${Sixes[3]}.png`} alt="Dice" />
            <img src={`src/assets/dice-${Sixes[4]}.png`} alt="Dice" />
        </div>
    </article> 
    )
}