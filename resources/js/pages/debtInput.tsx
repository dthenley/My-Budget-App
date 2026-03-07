export default function DebtInput({id}: {id: number}) {
    return (
        <li key={id} id={`debt-{id}`}>
            <input type="text" placeholder="Debt Name" />
            <input type="text" placeholder="Balance" />
            <input type="text" placeholder="Minimum Payment" />
            <input type="text" placeholder="Interest" />
            <input type="text" placeholder="Notes" />
        </li>
    );
}
