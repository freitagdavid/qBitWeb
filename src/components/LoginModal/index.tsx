import { Modal, ModalBody, ModalHeader, ROLE, SIZE } from "baseui/modal"
import { useActions, useAppState } from "../../overmindConfig";
import { State } from "../../overmindConfig/state";
import { useStyletron } from "styletron-react";
import { SyntheticEvent, useState } from "react";
import { Actions } from "../../overmindConfig/actions";
import { Input } from "baseui/input";
import { Button } from "baseui/button";

const LoginModal = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { authenticated } = useAppState<State>();
    const [css] = useStyletron();

    const actions: Actions = useActions();

    const handleSubmit = (e: SyntheticEvent<HTMLButtonElement, Event>) => {
        e.preventDefault();
        actions.login({ username, password });
    };

    return (<Modal isOpen={!authenticated} closeable={false} animate autoFocus size={SIZE.default} role={ROLE.dialog}>
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
    </Modal>)
}

export default LoginModal;