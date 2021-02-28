import ListagemDeProdutos from "../pages/ListagemDeProdutos";
import DetalhesDoProduto from "../pages/DetalhesDoProduto";
import Carrinho from "../pages/Carrinho";
import BuscaDeProdutos from "../pages/BuscaDeProdutos";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "../components";

const routes = [
  {
    path: "/busca",
    component: ListagemDeProdutos,
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
    // TODO: colocar exact após criação lógica  e pág de erro.
  },
];

export default function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
      </Switch>
    </Router>
  );
}
