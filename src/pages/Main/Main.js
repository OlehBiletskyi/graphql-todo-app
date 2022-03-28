import { AddTodo, TodoList } from '../../components';
import styles from './index.module.css';

export function Main() {
  return (
    <div className={styles.main}>
      <AddTodo />
      <TodoList />
    </div>
  );
}