import "./ItemListContainer.css";
import ItemList from "../../components/itemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const { categoria } = useParams();

  return (
    <>
      <div className="contenedor">
        <ItemList categoria={categoria} />
      </div>
    </>
  );
};
export default ItemListContainer;
