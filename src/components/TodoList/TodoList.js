import { useGetTodos } from '../../graphql';
import { Alert, CircularProgress } from '@mui/material';
import styles from "./style.module.css";

export function TodoList () {

  const  { loading, error, data } = useGetTodos();

  if (loading) return <CircularProgress className={styles.loading}/>
  if (error) return <Alert severity="error" className={styles.loading}>{error.message}</Alert>
  return (
    <ul className={styles.list}>
      {data?.todos?.map((item) => <li key={item.id} className={styles.listItem}>{item.type}</li>)}
    </ul>
  )
}