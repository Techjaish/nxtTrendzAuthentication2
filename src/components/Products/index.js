// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Product = () => {
  const userToken = Cookies.get('jwt_token')
  if (userToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          className="img"
          alt="products"
        />
      </div>
    </>
  )
}
export default Product
