import { client } from './graphql';
import { ApolloProvider } from '@apollo/client';
import { Container } from '@mui/material';
import { Main } from './pages/Main/Main';
import { Title } from './components';
import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <Container className='App' maxWidth='xl'>
        <Title />
        <Main/>
      </Container>
    </ApolloProvider>
  );
}

export default App;
