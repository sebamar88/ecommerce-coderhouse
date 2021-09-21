import NavBar from "./NavBar";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  let Pepe = "Ladri";
  console.log(Pepe);
  return (
    <>
      <NavBar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
