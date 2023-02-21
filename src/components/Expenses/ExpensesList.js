import './ExpensesList.css';

import ExpenseItem from './ExpenseItem';

function EpxensesList(props) {
  const liftKeyHandler = (key) => {
    props.onLiftKey(key);
  }

  if(props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        id={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        onLiftKey={liftKeyHandler}
      />
    ))}
    </ul>
  )
}

export default EpxensesList;