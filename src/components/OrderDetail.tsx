import './OrderDetail.css'
import React, { ChangeEvent, useState } from 'react'
import ProductsList from './ProductsList';
import { Products } from '../interfaces/Products';
import { isPropertySignature } from 'typescript';
import ModalWindow from './ModalWindow';

function OrderDetail() {
  var products: Products[] = [{
    name: 'name1',
    price: 100,
    quantity: 1
  },
  {
    name: 'name2',
    price: 100,
    quantity: 1
  },
  {
    name: 'name3',
    price: 100,
    quantity: 1
  }];
  var getSum = (): number => {
    var tmpsum: number = 0;
    order.forEach((product) => {
      tmpsum += (product.price * product.quantity)
    });
    return tmpsum;
  }
  
  var [order, setOrder] = useState(products.concat())
  var [sum, setSum] = useState(getSum)
  
  const handlerSumChange = () => {
    setSum(getSum)
  }
  const onAddClick = (index: number) => {
    order[index].quantity++;
    setOrder(order);
    handlerSumChange();

  }
  const onDeleteClick = (index: number) => {
    if (order[index].quantity > 1) {
      order[index].quantity--;
      setOrder(order);
      handlerSumChange();
    }

  }
  const onTotalDelete = (index: number) => {
    order.splice(index, 1);
    setOrder(order);
    handlerSumChange();
  }


  return (
    <div className="details-head">
      <h2>Details:</h2>
      <div className="list-head">
        <div>#</div>
        <div>Name</div>
        <div>Quantity</div>
        <div>Price</div>
        <div>Add/Delete 1 Position</div>
        <div>Delete</div>
      </div>
      {
        order.map((product, index) => (<ProductsList product={product}
          index={index}
          onAddClick={onAddClick}
          onDeleteClick={onDeleteClick}
          onTotalDeleteClicked={onTotalDelete}
        />))
      }
      <div>
        <div className= 'result'> SUM : {sum}  </div>
      </div>
    </div>
  )
}


export default OrderDetail;