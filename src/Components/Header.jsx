import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import { useSelector } from 'react-redux'

function Header() {
    const wishlist=useSelector((state)=>state.wishlistReducer.wishlist)
    const cartlist=useSelector((state)=>state.cartlistReducer)
  return (
    // <!-- Navigation-->
    <nav style={{zIndex:'1'}} className="navbar navbar-expand-lg position-fixed top-0 w-100 navbar-light bg-primary">
        <div className="container px-4 px-lg-5">
            <Link className="navbar-brand" to="/"><i className='fa-solid fa-cloud-arrow-up'></i>E-Cart</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              
                <form className="d-flex ms-auto ">

                        <Link to={"/wishlist"} className="btn btn-outline-light " type="submit">
                            <i className="fa-solid fa-heart text-danger me-1"></i>
                            Wishlist
                            <span className="badge bg-light text-dark ms-1 rounded-pill">{wishlist.length}</span>
                        </Link>

                    <Link to={"/cart"} className="btn btn-outline-light ms-4 " type="submit">
                        <i className="fa-solid fa-cart-plus me-1"></i>
                        Cart
                        <span className="badge bg-light text-dark ms-1 rounded-pill ">{cartlist.length}</span>
                    </Link>
                </form>
            </div>
        </div>
    </nav>
  )
}
export default Header