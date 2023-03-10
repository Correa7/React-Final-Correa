import "./ItemDetail.css";
import ItemCount from "./ItemCount";

const ItemDetail = ({ nombre, src, stock, precio, id, categoria }) => {
  let data = {
    id: id,
    nombre: nombre,
    url: src,
    precio: precio,
    stock: stock,
    categoria: categoria,
  };
  return (
    <div key={id} className="card-detail">
      <div className="card-img">
        <div>
          <img src={src} alt={nombre} />
        </div>
        <div>
          <h5 className="card-title">{nombre}</h5>
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
            <strong>Precio: $ {precio}</strong>
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
