export default function Threes({Threes}) {
    return (
        <article>
            <span>Threes</span>
            <div className="dices">
                <img src={`src/assets/dice-${Threes[0]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Threes[1]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Threes[2]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Threes[3]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Threes[4]}.png`} alt="Dice" />
            </div>
        </article>
    )
}
