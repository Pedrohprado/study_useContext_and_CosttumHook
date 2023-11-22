import React from "react";

import Produtcs from "./components/Produtcs";
import useFetch from "./hooks/useFetch";
import useLocalStorage from "./hooks/useLocalStorage";

import { GlobalStore } from "./context/GlobalContext";

const App = () => {
  const [produto, setProduto] = useLocalStorage("produtos", " ");
  const { request, data, loading, error } = useFetch();

  function handleClick(e) {
    const valor = e.target.innerHTML;
    setProduto(valor);
  }

  React.useEffect(() => {
    async function fetchData() {
      const { response } = await request(
        "https://ranekapi.origamid.dev/json/api/produto/"
      );

      console.log(response);
    }

    fetchData();
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>carregando...</p>;
  if (data)
    return (
      <GlobalStore>
        {data.map((produto) => (
          <div key={produto.id}>
            <h2>{produto.nome}</h2>
          </div>
        ))}
        <Produtcs />

        <button onClick={handleClick}>notebook</button>
        <p>{produto}</p>
      </GlobalStore>
    );
  else return null;
};

export default App;
