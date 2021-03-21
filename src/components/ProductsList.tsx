import { useState } from "react";
import { Products } from "../interfaces/Products";
import ModalWindow from "./ModalWindow";
import './ProductsList.css'

export interface ProductProps {
    product: Products
    index: number
    onAddClick: (index: number) => void
    onDeleteClick: (index: number) => void
    onTotalDeleteClicked: (index: number) => void
}

function ProductsList(props: ProductProps) {

    const getButtonState = (): boolean => {
        let state : boolean
        if (props.product.quantity < 2) {
            state = true
        }
        else {
            state = false
        }
        return state;
    }
    var [buttonState, setButtonState] = useState(getButtonState)
    const [modalState, setModalState] = useState('')
    const onTotalDeleteModal = () => {
        setModalState('visible')
    }
    const onAddClicked = () => {
        props.onAddClick(props.index)
        setButtonState(getButtonState)
    }
    const onDeleteClicked = () => {
        props.onDeleteClick(props.index)
        setButtonState(getButtonState)
    }
    const onTotalDeleteCancel = (newState: string) => {
        setModalState(newState)
    }
    const onTotalDeleteClick = () => {
        props.onTotalDeleteClicked(props.index)
    }

    return (
        <div className="list">
            <div>{props.index + 1}</div>
            <div>{props.product.name}</div>
            <div>{props.product.quantity}</div>
            <div>{props.product.price} p. </div>
            <div>
                <button className="button-style" disabled ={buttonState} onClick={onDeleteClicked} >-</button>
                <button className="button-style" onClick={onAddClicked}>+</button>
            </div>
            <div>
                <button className="button-style" onClick={onTotalDeleteModal}>X</button>
            </div>
            <ModalWindow modalstate={modalState}
                onTotalDeleteCancel={onTotalDeleteCancel}
                onTotalDeleteClick={onTotalDeleteClick} />
        </div>
    )
}

export default ProductsList;