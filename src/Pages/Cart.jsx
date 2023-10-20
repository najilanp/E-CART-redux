import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import { emptyCart } from '../redux/cartSlice';

function Cart() {
  const cartArray=useSelector((state)=>state. cartlistReducer)
  const dispatch=useDispatch()
  // console.log(cartArray);

  const[total,setTotal]=useState(0)
  const navigate=useNavigate()
  const totalAmount=()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal(0)
    }
  }

  useEffect(()=>{
    totalAmount()
  },[cartArray])

   const checkOut=()=>{
    alert("order has successfully placed")
    dispatch(emptyCart())
    navigate("/")
   }

  return (
  
    <div style={{marginTop:"100px"}}>
      {
        cartArray.length>0? 
        <>
      <div className='row ms-5 me-5'>
         <div className='col-md-8'>
            <table className=' mt-5 table border shadow'>
             <thead>
              <tr>
                <th>#</th>
                <th>item Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
    
              </tr>
             </thead>
             <tbody>
              {
                cartArray.map((product,index)=>(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{product.title}</td>
                    <td><img width={'100px'} height={"100px"} src={product.thumbnail} alt="" /></td>
                    <td>{product.price}</td>
                    <td><button onClick={()=>dispatch(deleteFromCart(product.id))} className='btn'><i className='fa-solid fa-trash text-danger fa-2x'></i></button></td>
                  </tr>
                ))
              }
             </tbody>
            </table>
         </div>
         <div className='col-md-4 border rounded mt-5'>
         <h3 className='fw-bolder  text-primary'>cart summary</h3>
         <h5>Total Products: <span>{cartArray.length}</span></h5>
         <h3>Total :$<span>{total}</span></h3>
         <div className='d-grid mt-5'><button onClick={checkOut} className='btn btn-success rounded'>checkout</button></div>
         </div>
      </div>
        </>
        : <p className='fw-bolder text-danger m-5 fs-1'>Cart is empty</p>
      }
    </div>
  )
}

export default Cart