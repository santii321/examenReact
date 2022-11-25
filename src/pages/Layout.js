import { Outlet, Link } from "react-router-dom";
import "../assets/styles/styles.css";
import Header from "../componentes/Header"


const Layout = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-color-nav">
        <section className="container-fluid">
          <a className="navbar-brand" href="#">HappyAgro SAS</a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <section className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cliente">Clientes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/provedores">Provedores</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar producto" />
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </section>
        </section>
      </nav>
      <Header />
      <Outlet />
    </>
  )
};

export default Layout;