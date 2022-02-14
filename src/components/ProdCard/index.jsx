import tenis from '../../assets/images/testeImg.jpg';
import { Card } from './style';

export default function ProdCard() {
  const teste = [
    {
      img: `${tenis}`,
      name: 'tenis 01',
      price: '250,00',
    },
    {
      img: `https://images.unsplash.com/photo-1588099768550-4014589e03e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
      name: 'tenis 02',
      price: '350,00',
    },
    {
      img: `https://images.unsplash.com/photo-1603787081207-362bcef7c144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80`,
      name: 'tenis 03',
      price: '220,00',
    },
    {
      img: `https://images.unsplash.com/photo-1595909236612-9fd30b476365?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
      name: 'tenis 04',
      price: '400,00',
    },
    {
      img: `https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80`,
      name: 'tenis 05',
      price: '200,00',
    },
  ]
  return (
    <>
      {teste.map( sneaker => (
        <Card>
          <div className='cart'>
            <ion-icon name="cart-outline"></ion-icon>
          </div>
          <img src={sneaker.img} alt="tenis exemplo"/>
          <p>{sneaker.name}</p>
          <span>{sneaker.price}</span>
        </Card>
      ))}
    </>
  )
}