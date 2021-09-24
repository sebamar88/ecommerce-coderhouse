import NavBar from "./Nav/NavBar";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  let Pepe = "Ladri";
  console.log(Pepe);
  return (
    <>
      <NavBar />
      <Container className="mt-4">{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
