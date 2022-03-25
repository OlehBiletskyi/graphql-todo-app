import { useGetTodos } from '../../graphql';

export function Todos () {

  const  { loading, error, data } = useGetTodos();

  if (loading) return <>Loading...</>
  if (error) return <>{error.message}</>
  return (
    <div>
      {data?.todos?.map((item) => <p key={item.id}>{item.type}</p>)}
    </div>
  )
}