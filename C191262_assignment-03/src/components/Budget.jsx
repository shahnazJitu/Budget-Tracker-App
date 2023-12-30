import { useEntries } from "../hooks/useEntries";

export default function Budget() {
  const { totalIncome, totalExpense } = useEntries();
  const availableBudget = totalIncome - totalExpense;

  return (
    <div className="mx-auto max-w-sm px-5 py-8 text-center text-white">
      <div>
        <h2>Available Budget</h2>
        <p className="mt-1 text-4xl font-medium">
          + BDT <span id="available-budget">{availableBudget}</span>
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between bg-green-500 px-4 py-3 text-sm">
        <p>Income</p>
        <p>
          + BDT <span id="total-income">{totalIncome}</span>
        </p>
      </div>

      <div className="mt-2 flex items-center justify-between bg-red-500 px-4 py-3 text-sm">
        <span>Expenses</span>
        <span>- BDT {totalExpense}</span>
      </div>
    </div>
  );
}
