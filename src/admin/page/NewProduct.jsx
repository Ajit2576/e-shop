import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../styles/Button'
import axios from 'axios';

function NewProduct() {
  let inlData = {
    name: '',
    price: '',
    discountPrice: '',
    productDescription: '',
    category: '',
    featureProduct: '',
    company: '',
    stock: '',
    productImage: '',
    size: '',
    color: '',
  }

  const [formdata, setFormData] = useState(inlData);
  // const [image, setImage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify({
      "name": formdata.name,
      "price": formdata.price,
      //  "image": image.image,
      "category": formdata.category,
      "descriptions": formdata.productDescription,
      "featured": formdata.featureProduct,
      "stock": formdata.stock,
      "company": formdata.company,
      "colors": formdata.color,
      "size": formdata.size
    });

    let reqOptions = {
      url: "http://localhost:8000/api/prodcuts/create",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    }

    try {
      let res = await axios.request(reqOptions)
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.id]: e.target.value })
  }

  return (
    <NewWrapp>
      <h2 className='h2h'>New Product</h2>
      <div className="new-pro-box">
        <div>
          <form action="" className='data-input' onSubmit={handleSubmit}>
            <div className='form-arg'>
              <label htmlFor="name">Enter Product Name: </label>
              <input className='input' type="text" name="" id="name" required onChange={handleChange} />
            </div>

            <div className='form-arg'>
              <label htmlFor="price">Enter Product Price: </label>
              <input className='input' type="number" name="" id="price" required onChange={handleChange} />
            </div>

            <div className='form-arg'>
              <label htmlFor="discountPrice">Discount Percentage: </label>
              <input className='input' type="number" name="" id="discountPrice" onChange={handleChange} />
            </div>

            <div className='form-arg'>
              <label htmlFor="productDescription">Enter Product Description: </label>
              <textarea name="" id="productDescription" cols={22} required onChange={handleChange} ></textarea>
            </div>

            <div className='form-arg'>
              <label htmlFor="category">Select Category: </label>
              <select name="" id="category" required onChange={handleChange}>
                <option value="mens">Mens</option>
                <option value="womens">Womens</option>
                <option value="kids">Kids</option>
              </select>
            </div>

            <div className='form-arg'>
              <label htmlFor="featureProduct">Feature Product: </label>
              <select name="" id="featureProduct" required onChange={handleChange}>
                <option value={false}>No</option>
                <option value={true}>Yes</option>
              </select>
            </div>

            <div className='form-arg'>
              <label htmlFor="company">Company: </label>
              <select name="" id="company" required onChange={handleChange}>
                <option value="Adidas">Adidas</option>
                <option value="Nike">Nike</option>
                <option value="Reebok">Reebok</option>
                <option value="RedTape">RedTape</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className='form-arg'>
              <label htmlFor="stock">Stocks: </label>
              <input className='input' type="number" name="" id="stock" onChange={handleChange} />
            </div>

            <div className='form-arg checkbox'>
              <label htmlFor="colors">Colors: </label>
              <input className='input' type="text" name="" id="colors" onChange={handleChange} />
            </div>

            <div className='form-size'>
              <label htmlFor="size">Sizes: </label>
              <div className='size-edit'>
                6<input type="checkbox" name="" id="size" onChange={handleChange} />
                7<input type="checkbox" name="" id="size" onChange={handleChange} />
                8<input type="checkbox" name="" id="size" onChange={handleChange} />
                9<input type="checkbox" name="" id="size" onChange={handleChange} />
                10<input type="checkbox" name="" id="size" onChange={handleChange} />
              </div>
            </div>

            <div className='form-arg upl-img'>
              <label htmlFor="productImage">Upload Product Image: </label>
              <input className='input' type="file" name="" id="productImage" onChange={e => setImage(e.target.files)} />
            </div>

            <Button style={{ borderRadius: '1rem' }} type='submit'>add product</Button>

          </form>
        </div>
      </div>
    </NewWrapp>
  )
}

const NewWrapp = styled.section`
  display: flex;
  flex-direction: column;
  
    .h2h{
      text-align: center;
      padding: 3rem 0;
      font-size: 3rem;
      font-weight: 700;
      text-shadow: 0.5rem 0.5rem 0.9rem rgb(195, 194, 194);
    }

    .new-pro-box{
      max-width: 80vw;
      margin: auto;
    }

    .data-input{
      display: flex;
      flex-direction: column;
      gap: 2rem;
      box-shadow: ${({ theme }) => theme.colors.shadowSupport};
      padding: 3rem;

      label{
        font-size: 2rem;
      }

      select{
        font-size: 1.5rem;
        width: 25vw;
        padding: 1.2rem;
        border: 1px solid ${({ theme }) => theme.colors.border};
        box-shadow: ${({ theme }) => theme.colors.shadowSupport};
        border-radius: 1rem;
      }

      .input, textarea{
        width: 25vw;
        border-radius: 1rem;
        margin-left: 5rem;
      }
    }
    
    .form-arg{
      display: flex;
      justify-Content: space-between;
    }
    .form-size{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .size-edit{
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 2rem;

      input type[checkbox]{
        display: flex;
        gap: 10px;
        color: red;
        background-color: yellow;
      }
    }

`
export default NewProduct
