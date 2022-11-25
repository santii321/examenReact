import Footer from "../componentes/Footer";
import medicinal2 from "../assets/images/Cannabis.jpg"
function Provedores() {

  return (
    <>
      <section className="mt-3 mb-3">
        <section className="container h-100">
          <section className="row d-flex justify-content-center align-items-center h-100">
            <section className="col-lg-12 col-xl-11">
              <section className="card text-black">
                <section className="card-body p-md-0">
                  <section className="alert warning text-center" role="alert">
                    Registrar un Provedor
                  </section>
                  <section className="row justify-content-center">

                    <section className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <form className="mx-1 mx-md-4">

                        <section className="d-flex flex-row align-items-center mb-4">
                          <section className="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" className="form-control" placeholder="Nombre Provedor" />
                          </section>
                        </section>

                        <section className="d-flex flex-row align-items-center mb-4">
                          <section className="form-outline flex-fill mb-0">
                            <input type="text" placeholder="Nit" id="form3Example3c" className="form-control" />
                          </section>
                        </section>
                        <section className="d-flex flex-row align-items-center mb-4">
                          <section className="form-outline flex-fill mb-0">
                            <input type="text" placeholder="Correo" id="form3Example3c" className="form-control" />
                          </section>
                        </section>
                        <section className="d-flex flex-row align-items-center mb-4">
                          <section className="form-outline flex-fill mb-0">
                            <input type="text" placeholder="Direccion" id="form3Example3c" className="form-control" />
                          </section>
                        </section>
                        <section className="d-flex flex-row align-items-center mb-4">
                          <section className="form-outline flex-fill mb-0">
                            <input type="text" placeholder="Telefono contacto" id="form3Example3c" className="form-control" />
                          </section>
                        </section>
                        <section className="d-flex flex-row align-items-center mb-4">
                          <section className="form-outline flex-fill mb-0">
                            <input type="text" placeholder="Descripción Empresa" id="form3Example3c" className="form-control" />
                          </section>
                        </section>
                        <section className="d-flex flex-row align-items-center mb-4">
                          <section className="form-outline flex-fill mb-0">
                            <input type="text" placeholder="Nombre producto comprado" id="form3Example3c" className="form-control" />
                          </section>
                        </section>
                        <section className="d-flex flex-row align-items-center mb-4">
                          <section className="form-outline flex-fill mb-0">
                            <input type="text" placeholder="Descripción producto" id="form3Example3c" className="form-control" />
                          </section>
                        </section>

                        <section className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" className="btn btn-success w-100">Agregar Producto</button>
                        </section>

                      </form>

                    </section>
                    <section className="col-md-10 col-lg-6 col-xl-7 d-flex justify-content-center order-1 order-lg-2">

                      <img src={medicinal2}
                        className="img-fluids" alt="Sample image" />
                    </section>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
}
export default Provedores