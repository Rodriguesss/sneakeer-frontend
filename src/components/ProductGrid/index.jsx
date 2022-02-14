import { useEffect, useState } from 'react';
import { Grid, GridCard, Info, UpperRow, LowerRow, Buy, Sizes } from './style'
import useAuth from '../../hooks/useAuth';
import services from '../../services/services'

export default function ProductGrid() {
  const { setSize, modifier, filters, token } = useAuth();
  const [ productList, setProductList ] = useState();

  useEffect(() => {
    handleProducts();
  },[])

  async function handleProducts() {
    if( modifier ) {
      setProductList(await services.getProducts(modifier, token));
    } else {
      setProductList(await services.getProducts(filters, token));
    }
  }

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
      {productList?.data?.result.map( product => (
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
            <Buy>Comprar</Buy>
          </LowerRow>
        </GridCard>
      ))}
    </Grid>
  )
}