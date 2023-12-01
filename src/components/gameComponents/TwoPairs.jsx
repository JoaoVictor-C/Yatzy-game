export default function TwoPairs({TwoPairs}) {
    return (
        <article>
            <span>One pair</span>
            <div className="dices">
                <img src={`src/assets/dice-${TwoPairs[0]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${TwoPairs[1]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${TwoPairs[2]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${TwoPairs[3]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${TwoPairs[4]}.png`} alt="Dice" />
            </div>
        </article>
    )
}