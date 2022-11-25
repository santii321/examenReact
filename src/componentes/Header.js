import { Outlet, Link } from "react-router-dom";
function Header() {

  return (
    <header>
      <section className="headerLogo">
        <section className="slogan">
          <h1 className="fw-light text-white">HappyAgro</h1>
          <p className="lead text-white">Somos una iniciativa que busca cultivar y distribuir en todo Colombia nuestra maravillosa planta emocional.</p>
          <p>
            <Link className="btn btn-primary my-2" to="/productos">Conoce nuestros productos...</Link>

          </p>
        </section></section>
    </header>
  );
}
export default Header