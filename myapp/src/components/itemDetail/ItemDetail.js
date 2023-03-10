import "./ItemDetail.css";
import ItemCount from "./ItemCount";

const ItemDetail = ({ title, url, stock, price, id, category, num }) => {
  let data = {
    id: id,
    title: title,
    url: url, 
    price: price,
    stock: stock,
    category: category,
    num: num,
  };
 
  return (
    <div key={id} className="card-detail">
      <div className="card-img">
        <div>
          <img src={url} alt={title} />
        </div>
        <div>
          <h5 className="card-title">{title}</h5>
          <br />
          <p>
            Lorem ipsum lkakkn slfkb nlknrh goarhg oaihgo aifnokfnaow ifbno
            wibno
          </p>
        </div>
      </div>
      <div className="cardBody-cart">
        <div>
          <h6 className="precio">
            <strong>Precio: $ {price}</strong>
            <br />
          </h6>
          <p className="card-text">
            The value of the illustrations is expressed in US dollars.
          </p>
          <h6 className="precio">
            <strong>Stock de {stock} unidades</strong>
            <br />
          </h6>
        </div>
        <div>
          <ItemCount data={data} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
