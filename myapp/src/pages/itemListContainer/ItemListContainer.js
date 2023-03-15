import "./ItemListContainer.css";
import ItemList from "../../components/itemList/ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => { 
  const { category } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "Items");

    getDocs(itemsCollection).then((snapshotList) => {
      const docs = snapshotList.docs.map((snapshot) => ({
        id: snapshot.id,
        ...snapshot.data(),
      }));
      setItems(docs);
    });
  }, []);

  return (
    <>
      <div className="contenedor">
        <ItemList category={category} items={items} />
      </div>
    </>
  );
};
export default ItemListContainer;
