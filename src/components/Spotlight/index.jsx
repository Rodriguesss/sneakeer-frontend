import { useNavigate } from 'react-router-dom';
import { Wrapper, Bigger, Smaller } from './style';

export default function Spotlight() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Bigger>
        <div className='text'>
          <p>Conheça nossos<br/>variados estilos de cores!</p>
          <button onClick={()=> navigate('/products')}>Conhecer</button>
        </div>
        <img 
          src='https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' 
          alt='teste imagem de categoria'
        />
      </Bigger>
      <Smaller>
        <div className='text'>
          <span>O queridinho da galera!</span>
          <p>Compre você também nosso produto de maior sucesso</p>
          <button onClick={()=> navigate('/products')}>Comprar</button>
        </div>
        <img 
          src='https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
          alt='imagem teste de produto mais vendido'
        />
      </Smaller>
    </Wrapper>
  )
}