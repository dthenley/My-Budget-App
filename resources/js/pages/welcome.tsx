import { Form, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { dashboard, login, register } from '@/routes';
import DebtInput from './debtInput';

export default function App() {
    const [currentStep, setCurrentStep] = useState(0);
    const [debtList, setDebtList] = useState([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]);
    const [incomeList, setIncomeList] = useState([{ id: 1 }, { id: 2 }]);


  const duplicate = () => {
    const newDebt = { id: debtList.length + 1 };
    setDebtList([...debtList, newDebt]);
  };

  return (
    <div>
        <form>
            {currentStep === 0 && (
                <>
                <button onClick={duplicate}>Duplicate</button>
                    <ul>
                        {debtList.map((card) => (
                            <DebtInput key={card.id} id={card.id} />
                        ))}
                    </ul>
                    <button onClick={() => setCurrentStep(1)}>Next</button>
                </>
            )}
            {currentStep === 1 && (
                <>
                    <button onClick={duplicate}>Duplicate</button>
                    <ul>
                        {incomeList.map((card) => (
                            <li key={card.id} id={`income-${card.id}`}>
                                <input type="text" placeholder="Income Name" />
                                <input type="text" placeholder="Amount" />
                                <select name="frequency" id="frequency">
                                    <option value="weekly">Weekly</option>
                                    <option value="bi-weekly">Every 2 Weeks</option>
                                    <option value="first_and_15th">1st and 15th</option>
                                    <option value="monthly">Every Month</option>
                                </select>
                                <input type="date" placeholder="Date of Next Payment" />
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => setCurrentStep(2)}>Next</button>
                    <button onClick={() => setCurrentStep(0)}>Back</button>
                </>
            )}
            {currentStep === 2 && (
                <>

                </>
            )}
        </form>
    </div>
  );
}
