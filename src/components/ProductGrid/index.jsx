import { useEffect } from 'react';
import { Grid, GridCard, Info, UpperRow, LowerRow, Buy, Sizes } from './style'
import useAuth from '../../hooks/useAuth';

export default function ProductGrid() {
  const { 
    setSize, addToCart, productList, handleProducts
  } = useAuth();

  useEffect(()=> {
    handleProducts()
  }, []);

  function mapSizes(arr){
    const newArr = [];

    for(let i=35; i<=42; i++){
      if(arr.includes(i)){
        newArr.push(<button onClick={(e)=> setSize(e.target.value)}>{i}</button>);
      } else {
        newArr.push(<button disabled>{i}</button>);
      }
    }

    return(newArr);
  }

  return(
    <Grid>
      {productList?.map( product => (
        <GridCard>
          <UpperRow>
            <img src={product.img} />
            <Info >
              <p>{product.name}</p>
              <span>R$ {product.price}</span>
            </Info>
          </UpperRow>
          <LowerRow>
            <Sizes>
              { mapSizes(product.sizes).map( button => button ) }
            </Sizes>
            <Buy id={product._id} onClick={(event) => addToCart(event.target.id)}>Comprar</Buy>
          </LowerRow>
        </GridCard>
      ))}
    </Grid>
  )
}