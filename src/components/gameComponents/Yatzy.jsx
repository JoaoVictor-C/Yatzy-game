export default function Yatzy({Yatzy}) {
    return (
        <article>
            <span>Yatzy</span>
            <div className="dices">
                <img src={`src/assets/dice-${Yatzy[0]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Yatzy[1]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Yatzy[2]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Yatzy[3]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Yatzy[4]}.png`} alt="Dice" />
            </div>
        </article>
    )
}