import './ModalWindow.css'

export interface ModalProps {
    modalstate: string
    onTotalDeleteCancel:(newState : string) => void
    onTotalDeleteClick : () => void
}

function ModalWindow(props: ModalProps) {
    const onCancelClick = () => {
        props.onTotalDeleteCancel('')
    }
    const onDeleteClick = () => {
        props.onTotalDeleteClick();
        props.onTotalDeleteCancel('');
    }

    return (
        <div className={"modal-back " + (props.modalstate)} id="modal-host">
            <div className="modal-window">
                <div className="modal-head">
                    <button className="button-modal" onClick={onCancelClick} >X</button>
                </div>
                <div className="modal-body">You are sure?</div>
                <div className="modal-footer" >
                    <button className="button-modal" onClick={onCancelClick} >No</button>
                    <button className="button-modal" onClick = {onDeleteClick} >Yes</button>
                </div>
            </div>
        </div>
    )
}

export default ModalWindow;