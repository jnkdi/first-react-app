import React, { useState } from "react";

import EpxensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("All Years");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    if (filteredYear === "All Years") {
      return true;
    } else {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterExpenses={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <EpxensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;