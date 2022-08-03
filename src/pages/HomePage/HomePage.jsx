import { useState, useEffect } from 'react'
import ProductList from '../../components/ProductList/ProductList'
import * as api from '../../services/api'

const API_ENDPOINT = 'products'
const INITIAL_QUERY = '?offset=0&limit=18'

const HomePage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      setError(null)
      try {
        const products = await api.getProducts(
          `${API_ENDPOINT}${INITIAL_QUERY}`
        )
        setProducts(products)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])
  return <ProductList products={products} />
}

export default HomePage
