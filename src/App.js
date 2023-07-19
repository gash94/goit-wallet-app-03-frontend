import LoginForm from 'components/LoginForm/LoginForm';
import { Container } from 'components/Container/Container';
import Transactions from 'components/Transactions/Transactions';
import DiagramTable from 'components/DiagramTable/DiagramTable';
import { data } from 'components/DiagramTable/data';
import { Background } from 'components/Background/Background';
import LoginPage from 'pages/ExamplePage/LoginPage';

function App() {
  return (
    <>
      <LoginPage />
      {/* <Background />
      <Container>
        <LoginForm />
        <DiagramTable data={data} />
        <Transactions />
      </Container> */}
    </>
  );
}

export default App;
