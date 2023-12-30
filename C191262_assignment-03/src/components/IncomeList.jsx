import { formatMoney } from "../utils/format-money";
import { useEntries } from "../hooks/useEntries";

export default function IncomeList() {
  const { entries, setEntries, totalExpense, totalIncome } = useEntries();
  const incomeEntries = entries.filter((entry) => entry.type === "income");

  const handleDelete = (item) => {
    const remainingTotalIncome = totalIncome - item.value;

    if (remainingTotalIncome < totalExpense) {
      alert("Expense cannot more than Income!!");
      return;
    }

    const updatedEntries = entries.filter((entry) => entry.id !== item.id);
    setEntries(updatedEntries);
  };
  const handleEdit = (item) => {
    const inputValue = prompt("Enter the new value :");

    if (inputValue !== null && !isNaN(parseFloat(inputValue))) {
      const newValue = parseFloat(inputValue);
      const remainingTotalIncome = totalIncome - item.value + newValue;

      if (remainingTotalIncome < totalExpense) {
        alert("Expense cannot more than Income!!");
        return;
      }

      const updatedEntries = entries.map((entry) =>
        entry.id === item.id
          ? { ...entry, value: parseFloat(inputValue) }
          : entry
      );

      setEntries(updatedEntries);
    }
  };

  return (
    <div>
      <h2 className="border-b pb-2 font-medium text-green-600">Income</h2>
      {incomeEntries.length === 0 && (
        <p className="py-2.5 text-gray-600">There are no expenses.</p>
      )}

      <ul id="income-list" className="divide-y">
        {incomeEntries.map((income) => {
          return (
            <li key={income.id} className="py-2.5">
              <div className="group flex justify-between gap-2 text-sm">
                <span>{income.title}</span>

                <div>
                  <span className="text-green-600">
                    {formatMoney(income.value)}
                  </span>
                  <span
                    className="ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block"
                    onClick={() => handleDelete(income)}
                  >
                    Delete
                  </span>
                  <span
                    className="ml-2 hidden cursor-pointer font-medium text-violet-600 group-hover:inline-block"
                    onClick={() => handleEdit(income)}
                  >
                    Edit
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
