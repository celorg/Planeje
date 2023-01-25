import styles from './FormBuy.module.css'
import { useState } from "react";

const FormBuy = ({httpConfig,projeto}) => {

    const [error,setError] = useState("");
    const [loading,setLoading] = useState(false);
    
    const [item,setItem] = useState("");
    const [preco,setPreco] = useState("");
    let [projetoId] = useState(projeto);

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");
        setLoading(true)

        if(!item || !preco){
            setError("Preencha os dois campos");
            return
        }
        const gastos = {
            projetoId,
            item,
            preco
        }

        httpConfig(gastos, "POST");
        setItem("");
        setPreco("");

    }

  return (
    <div>
        <form onSubmit={handleSubmit} className={styles.formbuy}>
            <div>
                <label>
                    <span>Compra:</span>
                    <input 
                        type="text"
                        name="item"
                        placeholder="Digite o nome do produto"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                    />
                </label>
                <label>
                    <span>Preço:</span>
                    <input 
                    type="number"
                    name="preco"
                    placeholder="Digite o valor"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    />
                </label>
            </div>
            
            <input type="submit" value="Enviar" className={styles.btnform}/>
        </form>
        
    </div>
  )
}

export default FormBuy