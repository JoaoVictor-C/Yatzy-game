export default function FullHouse({FullHouse}) {
    return (
        <article>
            <span>Full house</span>
            <div className="dices">
                <img src={`src/assets/dice-${FullHouse[0]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${FullHouse[1]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${FullHouse[2]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${FullHouse[3]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${FullHouse[4]}.png`} alt="Dice" />
            </div>
        </article>
    )
}