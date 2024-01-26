import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../styles/Button'
import axios from 'axios';
import base64 from 'base-64'
import { name } from '@cloudinary/url-gen/actions/namedTransformation';

function NewProduct() {
  let inlData = {
    name:'',
    price:'',
    discountPrice:'',
    productDescription:'',
    category:'',
    featureProduct:'',
    company:'',
    stock:'',
    productImage:'',
  }

  const [formdata, setFormData] = useState(inlData);
  const [image, setImage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json" 
     }
     
     let bodyContent = JSON.stringify({
       "name": formdata.name,
       "price": formdata.price,
       "image": image.image,
       "category": formdata.category,
       "descriptions": formdata.productDescription,
       "featured": formdata.featureProduct
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
      console.log();
    }
  }

  const handleChange = (e) => {
    setFormData({...formdata, [e.target.id]:e.target.value})
  }
  console.log( formdata);

  return (
    <NewWrapp>
      <h2 className='h2h'>New Product</h2>
      <div className="new-pro-box">
        <div>
          <form action=""  className='data-input' onSubmit={handleSubmit}>
            <div className='form-arg'>
              <label htmlFor="name">Enter Product Name: </label>
              <input type="text" name="" id="name" required onChange={handleChange} />
            </div>

            <div className='form-arg'>
              <label htmlFor="price">Enter Product Price: </label>
              <input type="number" name="" id="price" required onChange={handleChange} />
            </div>

            <div className='form-arg'>
              <label htmlFor="discountPrice">Discount Percentage: </label>
              <input type="number" name="" id="discountPrice" onChange={handleChange}/>
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
              <input type="number" name="" id="stock" onChange={handleChange}/>
            </div>

            <div className='form-arg upl-img'>
              <label htmlFor="productImage">Upload Product Image: </label>
              <input type="file" name="" id="productImage" onChange={e=>setImage(e.target.files)}/>
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

      input, textarea{
        width: 25vw;
        border-radius: 1rem;
        margin-left: 5rem;
      }
    }
    
    .form-arg{
      display: flex;
      justify-Content: space-between;
    }

    .upl-img input{
      
    }
`
export default NewProduct
