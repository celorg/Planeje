import styles from './Project.module.css';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import {useFetch} from "../../hooks/useFetch.js"
import FormBuy from "../../project/FormBuy.js";

const Project = () => {

  const {id} = useParams();
  const url = `http://localhost:3000/projetos/${id}`;
  const urlGastos = "http://localhost:3000/gastos"

  const [arrayFiltrado,setArrayFiltrado] = useState([]);

  const {data:projeto,error,loading} = useFetch(url);
  const {data:gastos,httpConfig} = useFetch(urlGastos);

  
  useEffect(() => {
    if(gastos){
      let novoArray = gastos.filter(gasto => gasto.projetoId == projeto.id);
      
      setArrayFiltrado(novoArray);
    }
    
  },[gastos]);

  return (
    <div className={styles.project}>
      {error && <p>{error}</p>}
      {loading && <p>Carregando ...</p>}
      <h4>{projeto && projeto.titulo}</h4>
      <div className={styles.detalhes}>
        <p><span>Investimento:</span> {projeto && projeto.investimento}</p>
        {/* {projeto && <p>Saldo: {projeto.saldo}</p>} */}
        <p><span>Categoria:</span> {projeto && projeto.categoria}</p>
        <p><span>Detalhes:</span> {projeto && projeto.objetivo}</p>
      </div>
      

      <FormBuy key={id} httpConfig={httpConfig} projeto={id}/>
        
        <table className={styles.tabela}>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {arrayFiltrado && arrayFiltrado.map(filterGastos => (
              <tr>
                <td>{filterGastos.item}</td>
                <td>R$ {filterGastos.preco}</td>
              </tr>
              
            ))}
          </tbody>
        </table>
    </div>
    
    )
}

export default Project