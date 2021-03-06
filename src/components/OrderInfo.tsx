import './OrderInfo.css';


function OrderInformation() {
    const order = {
        number: 2384,
        adress : 'ул Счастливая, д 13, кв 666',
    }
    const date = new Date().toLocaleDateString();
    
    
    return (

        <div className="order-head">
            <h3> Order #{order.number} </h3>
            <div className="order-info">
                <span>Adress: {order.adress} </span>
                <span>Data: {date} </span>
            </div>
        </div>
    )
}

export default OrderInformation;