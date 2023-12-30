import { formatMoney } from "../utils/format-money";
import { useEntries } from "../hooks/useEntries";

export default function ExpenseList() {
  const { entries, setEntries, totalExpense, totalIncome } = useEntries();

  const handleDelete = (itemId) => {
    const updatedEntries = entries.filter((entry) => entry.id !== itemId);
    setEntries(updatedEntries);
  };

  const handleEdit = (item) => {
    const inputValue = prompt("Enter the new value :");

    if (inputValue !== null && !isNaN(parseFloat(inputValue))) {
      const newValue = parseFloat(inputValue);
      const remainingTotalExpense = totalExpense - item.value + newValue;

      if (remainingTotalExpense > totalIncome) {
        alert("Expense cannot more than Income!!");
        return;
      }

      const updatedEntries = entries.map((entry) =>
        entry.id === item.id ? { ...entry, value: parseFloat(newValue) } : entry
      );

      setEntries(updatedEntries);
    }
  };

  const expenseEntries = entries.filter((entry) => entry.type === "expense");

  return (
    <div>
      <h2 className="border-b pb-2 font-medium text-red-600">Expense</h2>

      {expenseEntries.length === 0 && (
        <p className="py-2.5 text-gray-600">There are no expenses.</p>
      )}

      <ul id="expense-list" className="divide-y">
        {expenseEntries.map((item) => {
          return (
            <li key={item.id} className="py-2.5">
              <div className="group flex justify-between gap-2 text-sm">
                <span>{item.title}</span>
                <div>
                  <span className="text-red-600">
                    -{formatMoney(item.value)}
                  </span>
                  <span
                    className="ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </span>
                  <span
                    className="ml-2 hidden cursor-pointer font-medium text-violet-600 group-hover:inline-block"
                    onClick={() => handleEdit(item)}
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
