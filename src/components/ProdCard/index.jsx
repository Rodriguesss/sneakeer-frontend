import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import services from '../../services/services';
import { Card } from './style';

export default function ProdCard() {
  const [highlight, setHighlight] = useState()
  const { addToCart } = useAuth();
  const LIMIT = 5;

  useEffect(() => {
    getHighlights()
  }, [])

  async function getHighlights() {
    let promise = await services.getLimited(LIMIT)
    setHighlight(promise.data.result);
  }

  return (
    <>
      {highlight?.map( sneaker => (
        <Card>
          <div className='cart' id={sneaker._id} onClick={(e) => addToCart(e.target.id) }>
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