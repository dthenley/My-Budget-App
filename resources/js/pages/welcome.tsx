import { Form, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { dashboard, login, register } from '@/routes';
import DebtInput from './debtInput';

export default function App() {
  const [debtList, setDebtList] = useState([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]);

  const duplicate = () => {
    const newDebt = { id: debtList.length + 1 };
    setDebtList([...debtList, newDebt]);
  };

  return (
    <div>
        <button onClick={duplicate}>Duplicate</button>
        <form>
            <ul>
                {debtList.map((card) => (
                    <DebtInput key={card.id} id={card.id} />
                ))}
            </ul>
            <button type="submit">Save</button>
        </form>
    </div>
  );
}
