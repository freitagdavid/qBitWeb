import './App.css'
import AppBar from './components/appbar'
import LeftColumn from './components/leftColumn';
import RightColumn from './components/rightColumn';
import { useStyletron } from 'baseui';
import { Modal, ModalBody, ModalHeader, ROLE, SIZE } from 'baseui/modal';
import { SyntheticEvent, useEffect, useState } from 'react';
import { Input } from 'baseui/input';
import { Button } from 'baseui/button';
import { useActions, useAppState } from './overmindConfig';
import { State } from './overmindConfig/state';
import { Actions } from './overmindConfig/actions';

function App() {
  const [css, theme] = useStyletron();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const { loading, error, authenticate } = useAuthenticate();
  // const { authenticated, check } = useAuthenticated();
  const actions: Actions = useActions();
  const { authenticated } = useAppState<State>();

  const handleSubmit = (e: SyntheticEvent<HTMLButtonElement, Event>) => {
    e.preventDefault();
    actions.login({ username, password });
  };

  return (
    <div className="App">
      <Modal isOpen={!authenticated} closeable={false} animate autoFocus size={SIZE.default} role={ROLE.dialog}>
        <ModalHeader>Login</ModalHeader>
        <ModalBody className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        })}>
          <form className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          })}>
            <Input value={username} onChange={(e) => { setUsername(e.currentTarget.value) }} placeholder='username' clearOnEscape clearable />
            <Input value={password} onChange={(e) => { setPassword(e.currentTarget.value) }} placeholder='password' clearOnEscape clearable role="password" />
            <Button onClick={(e) => { handleSubmit(e) }} role='form'>Login</Button>
          </form>
        </ModalBody>
      </Modal>
      <div className={css({
        backgroundColor: theme.colors.backgroundPrimary,
        height: '100vh',
        width: '100vw',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
        gridTemplateRows: 'auto 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      })}>
        <AppBar />
        <LeftColumn />
        <RightColumn />
        {/* <InfoPanel /> */}
        {/* <StatusBar /> */}
      </div>
    </div>
  )
}

export default App
