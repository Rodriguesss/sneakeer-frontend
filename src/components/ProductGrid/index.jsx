import { Grid, GridCard, Info, UpperRow, LowerRow, Buy, Sizes } from './style'

export default function ProductGrid() {
  const teste = [
    {
      img: `https://images.unsplash.com/photo-1571601035754-5c927f2d7edc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
      name: 'tenis 01',
      price: '250,00',
      sizes: [38,39,40,41],
    },
    {
      img: `https://images.unsplash.com/photo-1588099768550-4014589e03e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
      name: 'tenis 02',
      price: '350,00',
      sizes: [35,36,39,40,41,42],
    },
    {
      img: `https://images.unsplash.com/photo-1603787081207-362bcef7c144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80`,
      name: 'tenis 03',
      price: '220,00',
      sizes: [39,40,41,42],
    },
    {
      img: `https://images.unsplash.com/photo-1595909236612-9fd30b476365?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
      name: 'tenis 04',
      price: '400,00',
      sizes: [37,38,39,40,41,42],
    },
    {
      img: `https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80`,
      name: 'tenis 05',
      price: '200,00',
      sizes: [35,36,37,38,39,40,41,42],
    },
  ]


  function mapSizes(arr){
    const newArr = [];

    for(let i=35; i<=42; i++){
      if(arr.includes(i)){
        newArr.push(<button>{i}</button>);
      } else {
        newArr.push(<button disabled>{i}</button>);
      }
    }

    return(newArr);
  }

  return(
    <Grid>
      {teste?.map( product => (
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