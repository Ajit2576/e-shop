import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import { useProductContext } from '../context/productcontex';
import PageNavigation from '../components/PageNavigation';
import Star from '../components/Star'
import FormatPrice from '../helper/FormatPrice'
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import loading from '../assets/loading.gif';
import { Container } from '../styles/Container';
import AddToCart from '../components/AddToCart';


function Product() {
  const { getProduct, isProductLoading, product } = useProductContext();
  const params = useParams()

  const api = `http://localhost:8000/api/prodcuts/get/${params.id}`;
  // const api = `https://shop-api-black-nu.vercel.app/api/prodcuts/get/${params.id}`;
  const { name, company, price, descriptions, stock, stars, reviews, image } = product;

  useEffect(() => {
    getProduct(api);
  }, []);

  if (isProductLoading) {
    return (
      <div className='container'>
        <img src={loading} alt="Loading" />
      </div>
    );
  }

  return (
    <Wrapper>
      <PageNavigation title={name} className='title' />
      <Container className="container">
        <div className="grid grid-two-column">
          <div className="product_images">
            <img src={image} alt={name} />
          </div>

          <div className="product-data">
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews} />

            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 2000} />
              </del>
            </p>

            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={price} />
            </p>
            <p>{descriptions}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                Brand: <span> {company} </span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .kUHfVC {
    font-size: 2.8rem;
    height: 0;
    padding: 3rem 2rem;
  }
  .kUHfVC a{
    font-size: 2.8rem;
    padding-right: 1rem;
  }

  .container {
    padding: 3rem 0;
  }

  .product_images {
    display: flex;
    align-items: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default Product
