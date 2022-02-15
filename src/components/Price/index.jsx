import { useState } from 'react'
import { PriceStyle } from './style'

export default function Price({children, quantity}) {
	console.log(quantity)
	const [value, setValue] = useState(children)

	return (
		//value[1] * quantity
		<PriceStyle>{value}</PriceStyle>
  )
}