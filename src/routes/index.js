import ListagemDeProdutos from "../pages/ListagemDeProdutos";
import DetalhesDoProduto from "../pages/DetalhesDoProduto";
import Carrinho from "../pages/Carrinho";
import BuscaDeProdutos from "../pages/BuscaDeProdutos";

const routes = [   

    {
        path: "/busca",
        component: BuscaDeProdutos,        
    },
    
    {
        path: "/detalhes",
        component: DetalhesDoProduto,
    },

    {
        path: "/carrinho",
        component: Carrinho,
    },

    {
        path: "/",
        component: ListagemDeProdutos,
            
    },
]
export default routes;