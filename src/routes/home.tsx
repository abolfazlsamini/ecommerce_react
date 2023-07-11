import { useEffect, useState } from "react";
import "../styles/home.css"
import { NavLink } from "react-router-dom";
interface State {
  data: any[] | null;
  error: string | null;
}
const Home = () => {

  const [loading, setLoading] = useState(true)
  const [productData, setProductData] = useState<State>({ data: [], error: "" })

  async function getProductData() {
    try {
      const res = fetch("https://fakestoreapi.com/products/")
      const productRes = await res
      const data = await productRes.json()
      setProductData({ data: data, error: "" })
      setLoading(false)
    } catch (error) {
      setProductData({ data: [], error: `${error}` })
      setLoading(false)
    }
  }

  useEffect(() => {
    getProductData()

  }, []);
  function capLetters(text: String) {
    if (text.length > 10)
      return text.slice(0, 10)
    return ""
  }
  const Products = () => {
    return (
      <div className="products_container">
        {
          productData.data && productData.data.length > 0 ? productData.data.map((product) => {
            console.log(productData.data)
            return (
              <ul className="product_ul">
                <li key={product.id} className="product_li">
                  <img className="product_img" src={product.image} alt="" />
                  <div className="details">

                    <NavLink to={`/${product.id}`}>{capLetters(product.title)}...
                    </NavLink>
                    {/* <p>{product.description}</p> */}
                    <p>Price: {product.price} $</p>
                  </div>
                </li>
              </ul>
            )
          }) : (<>
            {loading ??
              <>
                <p>Something went wrong!
                </p>
                <input type="button" onClick={() => getProductData()} value={"retry"} />
              </>
            }
          </>
          )
        }
      </div>
    )
  }
  return (
    <div>
      {loading && "Loading..."}
      <Products />
    </div>
  )
}

export default Home;
