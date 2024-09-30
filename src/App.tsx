import { useEffect, useState } from 'react'
import './App.css'

type Produtos = {
    id:number,
    nome:string,
    descricao:string,
    preco:number,
    imagem:string,

}

function App() {
  const [produtos, setProdutos] = useState<Produtos[]>([])
  useEffect(()=>{
        fetch("https://one022-backend-preparacao.onrender.com/produtos")
        .then(result=>result.json())
        .then(data=>{
            setProdutos(data)
        })
  },[])

  return (
    <>
        <div className='produtocontainer'>
            {produtos.map(p=>{
                return(
                    <div className='produtobox' key={p.id}>
                        <h1>{p.nome}</h1>
                        <p>{p.descricao}</p>
                        <p>{p.preco}</p>
                        <img src={p.imagem} alt={p.nome}/>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default App
