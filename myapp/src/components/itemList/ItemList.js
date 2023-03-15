import "./ItemList.css";
import Item from "./Item";
import { Link } from "react-router-dom";


const ItemList = ({category, items})=> { 

  let itemsFilter = items.filter((p) => p.categoryId === category);

  if (category) {
    return itemsFilter.map((prod) => (
      <Item 
        key={prod.id}
        alt={prod.title}
        title={prod.title}
        price={prod.price}
        url={prod.url}
        id={prod.id}
        num={prod.num}
      />
    ));
  } else {
    return items.map((prod) => (
      <div key={prod.id} className="card">
        <div className="card-img">
          <img className='image' src={prod.url} alt={prod.title} />
        </div>
        <h5 className="card-title">{prod.title}</h5>
        <p className="card-text">
          The value of the illustrations is expressed in US dollars.
        </p>
        <div className="cardBody">
          <h6 className="precio">
            <strong>Precio: $ {prod.price}</strong>
          </h6>
          <button className="btn btn-secondary me-md-2">
            <Link className="Link" to={`/detail/${prod.num}`}>
              View
            </Link>
          </button>
        </div>
      </div>
    ));
  }
};

export default ItemList;
