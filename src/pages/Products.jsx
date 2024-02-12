import React from 'react';
import styled from "styled-components";
import FilterSection from '../components/FilterSection';
import Sort from '../components/Sort'
import ProductList from '../components/ProductList'
import { Button } from '../styles/Button';
import { useProductContext } from '../context/productcontex';

function Products() {

  const { totalPages, setPage, page } = useProductContext()
  let arr = new Array(totalPages).fill(0)

  const handleNext = () => {
    if ((page + 1) <= totalPages) {
      setPage(page + 1)
    }
  }

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>

          <div className="main-product">
            <ProductList />
          </div>
          <div className='footbtn'>
            <Button className={page == 1 && "hidebtn"} onClick={handlePrev}>Prev</Button>
            <div className='numbtn'>
              {arr.map((_, i) => (
                <p className={page == (i + 1) && "pageNum"} onClick={() => setPage(i + 1)}>{i + 1}</p>
              ))}
            </div>
            <Button className={page == totalPages && "hidebtn"} onClick={handleNext}>next</Button>
          </div>
        </section>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;

    .footbtn{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
    .numbtn{
      display: flex;
      align-items: center;
      gap: 2rem;
    }
    .pageNum{
      background-color: rgb(98 84 243);
      padding: 0.5rem 1rem;
      color: #fff;
      border-radius: 10%;
    }
    .hidebtn{
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products
