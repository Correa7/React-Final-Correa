import "./ItemList.css";
import { Link } from "react-router-dom";

const Item = ({ url, alt, title, price, id }) => {
  return (
    <div key={id} className="card">
      <div className="card-img">
        <img className='image' src={url} alt={alt} />
      </div>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">
        The value of the illustrations is expressed in US dollars.
      </p>
      <div className="cardBody">
        <h6 className="precio">
          <strong>Precio: $ {price}</strong>
        </h6>
        <button className="btn btn-secondary me-md-2">
          <Link className="Link" to={`/detail/${id}`}>
            View
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Item;
