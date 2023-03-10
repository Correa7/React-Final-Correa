import "./ItemDetailContainer.css";
import ItemDetail from "../../components/itemDetail/ItemDetail";
import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, 'Items');

    getDocs(itemsCollection).then((snapshotList) => {
      const docs = snapshotList.docs.map((snapshot) => ({
        id: snapshot.id,
        ...snapshot.data(),
      }));
      setItems(docs);
    });
  }, []);

  let itemsFilter = items.filter((p) => p.id === id);

  return (
    <div>
      {itemsFilter.map((prod) => (
        <div key={prod.id} className="card-detail-container">
          <ItemDetail
            title={prod.title}
            url={prod.url}
            stock={prod.stock}
            price={prod.price}
            category={prod.categoryId}
            id={prod.id}
            num={prod.num}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemDetailContainer;
