import { NavLink } from 'react-router-dom';
import FormatPrice from '../helper/FormatPrice.js';

function Product(curElem) {
    const { _id, name, image, price, category } = curElem;
    return <NavLink to={`/product/${_id}`}>
        <div className="card">
            <figure>
                <img src={image} alt={name} />
                <figcaption className='caption'>{category}</figcaption>
            </figure>

            <div className="card-data">
                <div className="card-data-flex">
                    <h3>{name}</h3>
                    <p className='card-data--price'>{<FormatPrice price={price} />}</p>
                </div>
            </div>
        </div>
    </NavLink>
}

export default Product
