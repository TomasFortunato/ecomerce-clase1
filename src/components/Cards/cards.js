import React,{ useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './cards.css'
export default function Card({data}) {
    const {title, dias, precio, image}= data
    const [ count, setCount ] = useState(0)
    const [ countTest, setCountTest ] = useState (0)

    console.log("estado contador: ", count)

    const addStock = () => {
        setCount(count + 1)
    }

    const removeStock = () => {
        setCountTest(countTest - 1)
    }
    return(
        <div className="card-item">
            <img src={`./${image}`} alt={image}/>
        
            <div  className='container-card-data'>
                <h2>{title}</h2>
                <p>Entrenamientos Semanales : <br></br>{dias}</p>
                <p>Precio : $ {precio}</p>
                <button>Suscribirse</button>
            </div>
        </div>
    )
}
