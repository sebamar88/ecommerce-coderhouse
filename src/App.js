import Layout from "./components/UI/Layout";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <Layout>
      <h1>Products</h1>
      <ItemListContainer />
    </Layout>
  );
};

export default App;
