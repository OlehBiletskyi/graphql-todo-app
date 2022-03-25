import { useGetTodos } from '../../graphql';

export function Todos () {

  const  { loading, error, data } = useGetTodos();

  if (loading) return <>Loading...</>
  if (error) return <>{error.message}</>
  return (
    <ol>
      {data?.todos?.map((item) => <li key={item.id}>{item.type}</li>)}
    </ol>
  )
}