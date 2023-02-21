import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const deleteExpenseHandler = (key) => {
    props.onLiftKey(key);
  }

  return (
    <li>
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button className='expense-item__delete' type='button' onClick={() => deleteExpenseHandler(props.id)}>Delete</button>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;