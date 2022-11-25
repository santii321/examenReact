import Footer from "../componentes/Footer";
import medicinal2 from "../assets/images/medicinal2.jpg"
import medicinal3 from "../assets/images/cannabis.png"
function Productos() {

  return (
    <>
      <section className="mt-3">
        <section className="container h-100">
          <section className="row d-flex justify-content-center align-items-center h-100">
            <section className="col-lg-12 col-xl-11">
              <section className="card text-black">
                <section className="card-body p-md-0">
                  <section className="alert alert-blue text-center" role="alert">
                    Registra un nuevo producto
                  </section>
                  <section className="row justify-content-center">

                    <section className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <form className="mx-1 mx-md-4">

                        <section className="d-flex flex-row align-items-center mb-4">
                          <section className="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" className="form-control" placeholder="Nombre del producto" />
                          </section>
                        </section>

                        <section className="d-flex flex-row align-items-center mb-4">
                          <section className="form-outline flex-fill mb-0">
                            <input type="text" placeholder="Referencia" id="form3Example3c" className="form-control" />
                          </section>
                        </section>
                        <section className="d-flex flex-row align-items-center mb-4">
                          <section className="form-outline flex-fill mb-0">
                            <input type="number" placeholder="Tamaño" id="form3Example3c" className="form-control" />
                          </section>
                        </section>
                        <section className="d-flex flex-row align-items-center mb-4">
                          <section className="form-outline flex-fill mb-0">
                            <input type="number" placeholder="Cantidad" id="form3Example3c" className="form-control" />
                          </section>
                        </section>
                        <section className="d-flex flex-row align-items-center mb-4">
                          <select className="form-select" aria-label="Default select example">
                            <option selected>Selecciona el sexo de la planta</option>
                            <option value="1">Macho</option>
                            <option value="2">Hembra</option>
                          </select>
                        </section>
                        <section className="d-flex flex-row align-items-center mb-4">
                          <section className="form-outline flex-fill mb-0">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Descripcion producto"></textarea>
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
        <section className="container">
          <section className="row d-flex justify-content-center margen ">
            <section className="col-lg-3 col-md-12 mb-4">
              <section className="card">
                <section className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light">
                  <img src="https://cannapp.com.co/wp-content/uploads/2021/03/0010s_0016_Aceite-DnSelva-30ml-Caja-Frontal.jpg"
                    className="w-100" />
                  <a href="#!">
                    <section className="mask">
                      <section className="d-flex justify-content-start align-items-end h-100">
                        <h5><span className="badge bg-primary ms-2">Nuevo</span></h5>
                      </section>
                    </section>
                    <section className="hover-overlay">
                      <section className="mask"></section>
                    </section>
                  </a>
                </section>
                <section className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-3">Aceite de cannabis</h5>
                  </a>
                  <p>El aceite de cannabis es a base de oliva extravirgen con extracto de cannabis full spectrum, contiene aproximadamente entre 2.75% de CBD y menos del 1% de THC.</p>
                  <h6 className="mb-3">$47.300 COP</h6>
                </section>
              </section>
            </section>

            <section className="col-lg-3 col-md-6 mb-4">
              <section className="card">
                <section className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light">
                  <img src="https://cannapp.com.co/wp-content/uploads/2020/08/pomada.jpg"
                    className="w-100" />
                  <a href="#!">
                    <section className="mask">
                      <section className="d-flex justify-content-start align-items-end h-100">
                        <h5><span className="badge bg-success ms-2">Eco</span></h5>
                      </section>
                    </section>
                    <section className="hover-overlay">
                      <section className="mask" ></section>
                    </section>
                  </a>
                </section>
                <section className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-3">Pomada de cannabis</h5>
                  </a>
                  <a href="" className="text-reset">
                    <p>Pomada de cannabis medicinal a base de cera de abeja. Ideal para aliviar dolores musculares y articulares. También es usado por deportistas antes, durante y después del ejercicio.</p>
                  </a>
                  <h6 className="mb-3">$64.300 COP</h6>
                </section>
              </section>
            </section>

            <section className="col-lg-3 col-md-6 mb-4">
              <section className="card">
                <section className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
                  <img src="https://www.allcitycanvas.com/wp-content/uploads/2020/06/tipos-de-cannabis-two.webp"
                    className="w-100" />
                  <a href="#!">
                    <section className="mask">
                      <section className="d-flex justify-content-start align-items-end h-100">
                        <h5><span className="badge bg-danger ms-2">-50%</span></h5>
                      </section>
                    </section>
                    <section className="hover-overlay">
                      <section className="mask"></section>
                    </section>
                  </a>
                </section>
                <section className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-3">Cannabis Indica</h5>
                  </a>
                  <a href="" className="text-reset">
                    <p>Esta especie florece mucho más rápido y puede florecer más fácilmente ajustando el ciclo de luz</p>
                  </a>
                  <h6 className="mb-3">
                    <s>$30.300 COP</s><strong className="ms-2 text-danger">15.150 COP</strong>
                  </h6>
                </section>
              </section>
            </section>
            <section className="col-lg-3 col-md-6 mb-4">
              <section className="card">
                <section className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
                  <img src="https://www.allcitycanvas.com/wp-content/uploads/2020/06/tipos-de-cannabis-four.webp"
                    className="w-100" />
                  <a href="#!">
                    <section className="mask">
                      <section className="d-flex justify-content-start align-items-end h-100">
                        <h5><span className="badge bg-danger ms-2">-10%</span></h5>
                      </section>
                    </section>
                    <section className="hover-overlay">
                      <section className="mask"></section>
                    </section>
                  </a>
                </section>
                <section className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-3">Sativa</h5>
                  </a>
                  <a href="" className="text-reset">
                    <p>planta pertenece a la familia Sativa es porque ganan altura a lo largo de todo su crecimiento y en las fases de floración. </p>
                  </a>
                  <h6 className="mb-3">
                    <s>$29.900</s><strong className="ms-2 text-danger">$20.900 COP</strong>
                  </h6>
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
export default Productos