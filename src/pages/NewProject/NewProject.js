import styles from './NewProject.module.css'

import { redirect } from 'react-router-dom'

//hooks
import { useFetch } from '../../hooks/useFetch';
import { useEffect, useState } from 'react';

const url = "http://localhost:3000/projetos";
const urlCategorias = "http://localhost:3000/Categorias"

const NewProject = () => {

  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);
  const [categorias,setCategorias] = useState([]);

  const [titulo,setTitulo] = useState("");
  const [investimento,setInvestimento] = useState("");
  const [categoria,setCategoria] = useState("");
  const [objetivo,setObjetivo] = useState("");
  const [saldo] = useState("");
  const [gastos] = useState([]);

  const {httpConfig} = useFetch(url);

  

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await fetch(urlCategorias);

        const json = await res.json();

        setCategorias(json);
      }catch(error){
        console.log(error.message);
      }
    }
    fetchData();
  },[]);

  const handleSubmit = async (e) =>{

    e.preventDefault();

    setLoading(true);
    setError("");

    const projeto = {
      titulo,
      investimento,
      categoria,
      objetivo,
      saldo,
      gastos
    }

    if(!titulo || !investimento || !categoria || !objetivo){
      setError("Digite todos os campos");
      return;
    }

    // console.log(projeto);
    httpConfig(projeto,"POST");
    setLoading(false);
    setTitulo("");
    setInvestimento("");
    setCategoria("");
    setObjetivo("");

    redirect("/projetos");
  }

  return (
    <div className={styles.newproject}>
      <h2>Crie seu projeto</h2>
      <p>Planeje seu futuro!</p>
      <form onSubmit={handleSubmit}>
        {error && <p className={styles.error}>{error}</p>}
        <label>
          <span>Nome:</span>
          <input 
            type="text" 
            name="titulo"
            placeholder='Digite o nome do Projeto'
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </label>
        <label>
          <span>Investimento:</span>
          <input 
            type="number" 
            name="investimento"
            placeholder='Digite o valor do investimento'
            value={investimento}
            onChange={(e) => setInvestimento(e.target.value)}
          />
        </label>
        <label>
          <span>Categoria:</span>
          <select name='categoria' onChange={(e) => setCategoria(e.target.value)} value={categoria}>
            <option>Selecione a Categoria</option>
            {categorias && categorias.map((categoria) => (
              <option value={categoria.nome} key={categoria.id}>
                {categoria.nome}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Projeto:</span>
          <textarea 
            type="text" 
            name="objetivo"
            placeholder='Qual é o objetivo desse projeto'
            value={objetivo}
            onChange={(e) => setObjetivo(e.target.value)}
          />
        </label>
        {loading && <input type='submit' value="Carregando" disabled/>}
        {!loading && <input type='submit' value="Criar Projeto"/>}
        
      </form>
    </div>
  )
}

export default NewProject