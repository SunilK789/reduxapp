import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {bindActionCreators} from "redux"
import {actionCreators} from "../state/index"

const Shop = () => {
	const dispatch = useDispatch()
	const balance = useSelector((state) => state.amount)
	const {depositMoney, withdrawMoney} = bindActionCreators(
		actionCreators,
		dispatch
	)

	return (
		<div className='conatiner text-center'>
			<h2>Add Balance 100 Rs.</h2>
			<button
				className='btn btn-primary mx-2 my-2'
				onClick={() => withdrawMoney(100)}
			>
				-
			</button>
			Update Balance {balance}
			<button
				className='btn btn-primary mx-2 my-2'
				onClick={() => depositMoney(100)}
			>
				+
			</button>
		</div>
	)
}

export default Shop
