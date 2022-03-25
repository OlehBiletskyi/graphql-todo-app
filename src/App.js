import './App.css';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql';
import { AddTodo, Todos } from './components';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <AddTodo />
        <div>**********************************</div>
        <Todos />
        <div>**********************************</div>
      </div>
    </ApolloProvider>

  );
}

export default App;
