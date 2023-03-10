import "./ItemList.css";
import Item from "./Item";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ItemList = ({categoria})=> {
  const [produ, setProd] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            nombre: "Fun",
            categoria: "Pintura",
            precio: 200,
            stock: 10,
            url: "https://img.freepik.com/vector-gratis/pizza-italiana-estilo-pop-art_24908-61698.jpg?w=740&t=st=1675906276~exp=1675906876~hmac=98a7d36edc739c58407844428788a8ab452d2ac84617a8e49980361ec8eb2029",
          },
          {
            id: 2,
            nombre: "Pops",
            categoria: "Escultura",
            precio: 300,
            stock: 10,
            url: "https://media.artsper.com/artwork/1227753_1_m.jpg",
          },
          {
            id: 3,
            nombre: "Fruit",
            categoria: "Pintura",
            precio: 500,
            stock: 10,
            url: "https://img.freepik.com/vector-premium/arte-pop-conjunto-dibujos-animados-sandia-vector-ilustracion-diseno-grafico_24640-11717.jpg?w=740",
          },
          {
            id: 4,
            nombre: "Sidewalk",
            categoria: "Escultura",
            precio: 320,
            stock: 10,
            url: "https://www.eluniversal.com.mx/sites/default/files/u39647/9_0.jpg",
          },
          {
            id: 5,
            nombre: "Rock",
            categoria: "Escultura",
            precio: 400,
            stock: 10,
            url: "https://3.bp.blogspot.com/-FfFxMCTR1rI/Uy8kbbdv7qI/AAAAAAABoLQ/0WJICWob33k/s1600/DSC_1394.jpg",
          },
          {
            id: 6,
            nombre: "Marilyn",
            categoria: "Pintura",
            precio: 660,
            stock: 10,
            url: "https://img.itinari.com/page/content/original/ce9dc5a0-dab7-4f27-9300-ba6b3c6aeee5-pop-art-collage-mark-ashkenazi.jpg?ch=DPR&dpr=1.5&w=994&s=8b431e231a761377a0e5a06f2494f81c",
          },
          {
            id: 7,
            nombre: "Formschneider",
            categoria: "Grabado",
            precio: 330,
            stock: 8,
            url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Formschneider.jpg",
          },
          {
            id: 8,
            nombre: "Study for the Kneeling Leda",
            categoria: "Dibujo",
            precio: 660,
            stock: 10,
            url: "https://www.lanubeartistica.es/dibujo_artistico_1/Unidad2/DA1_U2_T3_Contenidosv01/Study_for_the_Kneeling_Leda.jpg",
          },
          {
            id: 9,
            nombre: "Melancolia",
            categoria: "Grabado",
            precio: 600,
            stock: 10,
            url: "https://upload.wikimedia.org/wikipedia/commons/1/14/Melencolia_I_%28Durero%29.jpg",
          },
          {
            id: 10,
            nombre: "Se quebró el cantaro",
            categoria: "Grabado",
            precio: 860,
            stock: 2,
            url: "https://images.theconversation.com/files/452191/original/file-20220315-13-1vtlph.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip",
          },
          {
            id: 11,
            nombre: "Vitruve Luc Viatour",
            categoria: "Dibujo",
            precio: 500,
            stock: 7,
            url: "https://upload.wikimedia.org/wikipedia/commons/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg",
          },
          {
            id: 12,
            nombre: "Venus Body Arte Pop",
            categoria: "Escultura",
            precio: 660,
            stock: 10,
            url: "https://http2.mlstatic.com/D_NQ_NP_958660-MLA47315543154_082021-O.webp",
          },
          {
            id: 13,
            nombre: "Anna de Artceramis",
            categoria: "Escultura",
            precio: 1350,
            stock: 10,
            url: "https://arteologic.com/wp-content/uploads/2022/10/Figura-de-ceramica-colores.webp",
          },
          {
            id: 14,
            nombre: "En Plena Actividad, 1928",
            categoria: "Pintura",
            precio: 1540,
            stock: 3,
            url: "https://pinturaseterna.com.ar/blanco/wp-content/uploads/2021/01/PLENA-ACTIVIDAD-1.jpg",
          },
          {
            id: 15,
            nombre: "Puerto de sozopol en bulgaria",
            categoria: "Dibujo",
            precio: 460,
            stock: 10,
            url: "https://previews.123rf.com/images/kirilart/kirilart1306/kirilart130600036/20540631-l%C3%A1piz-de-dibujo-en-blanco-y-negro-de-los-antiguos-barcos-de-pesca-flotando-en-las-aguas-tranquilas.jpg",
          },
          {
            id: 16,
            nombre: "Descargando Carbón, 1928",
            categoria: "Pintura",
            precio: 1220,
            stock: 4,
            url: "https://pinturaseterna.com.ar/blanco/wp-content/uploads/2021/01/DESCARGANDO-CARBON.jpg",
          },
          {
            id: 17,
            nombre: "La adoración de los Reyes",
            categoria: "Grabado",
            precio: 420,
            stock: 10,
            url: "https://1.bp.blogspot.com/-Gm0-8MOj-Hg/VgvxI6QshYI/AAAAAAAABZc/JV2t7DjS2cI/s1600/la-adoracion-de-los-reyes-magos.jpg",
          },
          {
            id: 18,
            nombre: "Dora Maar con gato",
            categoria: "Dibujo",
            precio: 860,
            stock: 10,
            url: "https://www.justcolor.net/es/wp-content/uploads/sites/3/nggallery/art/colorear-para-adultos-obra-de-arte-35418.jpg",
          },
        ]);
      }, 1000); 
    });
    promesa.then((res) => {
      setProd(res);
    });
  }, []);

  let prodFilter = produ.filter((p) => p.categoria === categoria);
 
  if (categoria) {
    return prodFilter.map((prod) => (
      <Item 
        key={prod.id}
        alt={prod.nombre}
        title={prod.nombre}
        precio={prod.precio}
        src={prod.url}
        categoria={prod.categoria}
        id={prod.id}
      />
    ));
  } else {
    return produ.map((prod) => (
      <div key={prod.id} className="card">
        <div className="card-img">
          <img className='image' src={prod.url} alt={prod.nombre} />
        </div>
        <h5 className="card-title">{prod.nombre}</h5>
        <p className="card-text">
          The value of the illustrations is expressed in US dollars.
        </p>
        <div className="cardBody">
          <h6 className="precio">
            <strong>Precio: $ {prod.precio}</strong>
          </h6>
          <button className="btn btn-secondary me-md-2">
            <Link className="Link" to={`/detail/${prod.id}`}>
              View
            </Link>
          </button>
        </div>
      </div>
    ));
  }
};

export default ItemList;
