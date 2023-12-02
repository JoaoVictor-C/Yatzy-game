export default function Bonus({Bonus}) {
    return (
        <div className="bonus">
            <h3>Bonus: <span>{(Bonus != 0) ? Bonus : "(Sum +63)"}</span></h3>
        </div>
    )
}