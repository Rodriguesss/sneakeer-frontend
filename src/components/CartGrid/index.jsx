import { Grid, GridCard, Info, UpperRow, LowerRow } from '../ProductGrid/style'
import { Button } from './style'
import Quantity from '../Quantity'
import useAuth from '../../hooks/useAuth'

function multiply(price) {
	return parseFloat(price.replace(",", "."))
}

export function CartGrid({ setTotal }) {
	const { cart, removeToCart } = useAuth()

	function handleTotal() {
		let total = 0

		cart?.forEach(({ price }) => {
			(total += multiply(price.replace(",", '.')))
		})

		setTotal(total.toFixed(2))
	}

	handleTotal()

	function handleRemoveCart(e) {
		removeToCart(e.target.id)
	}

	return (
		<Grid>
			{cart?.map(({ _id, name, price, img }, index) => (
				<GridCard key={index}>
					<UpperRow>
						<img src={img} />
						<Info >
							<p>{name}</p>
							<span>R$ {price}</span>
						</Info>
					</UpperRow>
					<LowerRow>
						<Quantity />
						<Button id={_id} onClick={(e) => handleRemoveCart(e)}>Remover</Button>
					</LowerRow>
				</GridCard>
			))
			}
		</Grid >
	)
}
