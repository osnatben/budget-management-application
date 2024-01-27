import UserStore from "../../store/UserStore";
// import Card from './user/card'
// import MultiActionAreaCard from './user/card'

 import { observer } from "mobx-react-lite";


const User = observer(({ index }) => {
//UserStore.user[index]={}
  return (
    <li>
      {console.log(user)}

      {/* <MultiActionAreaCard title={"hi"} text={"hfokfsdofio"} img={'BudgetManagement\src\assets\jpg\kkl_logo-1.png'}></MultiActionAreaCard> */}
      
      {/* <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => todo.toggleCompleted()}
      />
      <span>{todo.title}</span>
      <button onClick={() => store.removeTodo(todo.id)}>Remove</button> */}
    </li>
  );
});

export default User;