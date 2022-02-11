import { useState } from 'react'
import Modal from 'react-modal'

import { TitleHeader, Button, Link } from "./style"
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
  let subtitle
  const [isLogin, setIsLogin] = useState(true)
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Entrar/Cadastrar</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="Modal"
      >

        <TitleHeader>
          <Button onClick={closeModal}>X</Button>
        </TitleHeader>

        {isLogin
          ? <Login subtitle={subtitle} />
          : <Register />}

        <Link>
          {isLogin ? `Não tem cadastro` : `Já possui cadastro?`}
          <b onClick={() => { setIsLogin(!isLogin) }}>
            &nbsp;{isLogin ? `Cadastre-se` : `Entrar`}
          </b>
        </Link>
      </Modal>
    </div>
  )
}