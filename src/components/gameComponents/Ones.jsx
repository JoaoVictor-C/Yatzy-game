export default function Ones({Ones, selectNumbers, couldSelect}) {
    return (
        <article>
            <span>Ones</span>
            <div className="dices" onClick={() => if (couldSelect) {
                selectNumbers(1)
            }}>
                <img src={`src/assets/dice-${Ones[0]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Ones[1]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Ones[2]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Ones[3]}.png`} alt="Dice" />
                <img src={`src/assets/dice-${Ones[4]}.png`} alt="Dice" />
            </div>
        </article>
    )
}