import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import "../styles/productView.css"

interface State {
  data: any;
  error: string | null;
}
const ProductView = () => {
  const [loading, setLoading] = useState(true)
  const [productData, setProductData] = useState<State>({ data: null, error: "" })
  let { id } = useParams()
  async function getProductData() {
    try {
      const res = fetch(`https://fakestoreapi.com/products/${id}`)
      const productRes = await res
      const data = await productRes.json()
      setProductData({ data: data, error: "" })
      setLoading(false)
    } catch (error) {
      setProductData({ data: null, error: `${error}` })
      setLoading(false)
    }
  }

  useEffect(() => {
    getProductData()

  }, []);
  const Products = () => {
    return (
      <div className="products_container">
        {
          productData.data ?
            (
              <div className="product_view">

                <img className="product_img_product_view" src={productData.data.image} alt="" />
                <div className="details_product_view">

                  <p>{productData.data.description}</p>
                </div>
                <p>Price: {productData.data.price} $</p>

              </div>
            )

            : (<>
              {!loading ??
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
export default ProductView;