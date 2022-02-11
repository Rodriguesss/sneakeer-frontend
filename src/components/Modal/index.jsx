import { useState } from 'react'
import Modal from 'react-modal'

import { TitleHeader, Button, Link, LinkToogle } from "./style"
import Login from "../Form/Login"
import Register from "../Form/Register"

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
}

Modal.setAppElement('#root');

export default function ModalComponent() {
  const [isLogin, setIsLogin] = useState(true)
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Entrar/Cadastrar</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="Modal"
      >

        <TitleHeader>
          <Button onClick={closeModal}>X</Button>
        </TitleHeader>

        {isLogin
          ? <Login />
          : <Register />}

        <Link>
          {isLogin ? `Não tem cadastro?` : `Já possui cadastro?`}&nbsp;
          <LinkToogle onClick={() => { setIsLogin(!isLogin) }}>
            {isLogin ? `Cadastre-se` : `Entrar`}
          </LinkToogle>
        </Link>
      </Modal>
    </div>
  )
}