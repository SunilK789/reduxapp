import React from "react"
import {useDispatch} from "react-redux"
import {bindActionCreators} from "redux"
import {actionCreators} from "../state/index"

const Shop = () => {
	const dispatch = useDispatch()
	const action = bindActionCreators(actionCreators, dispatch)

	return (
		<div className='conatiner text-center'>
			<h2>Add Balance 100 Rs.</h2>
			<button
				className='btn btn-primary mx-2 my-2'
				onClick={() => action.withdrawMoney(100)}
			>
				-
			</button>
			Add Balance
			<button
				className='btn btn-primary mx-2 my-2'
				onClick={() => action.depositMoney(100)}
			>
				+
			</button>
		</div>
	)
}

export default Shop
