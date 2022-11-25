import img_canavis from "../assets/images/911bb6f64463c342ebc758ad1f9000ed_XL.jpg";
import img_canavis1 from "../assets/images/A_UNO_468207.jpg";
import img_canavis2 from "../assets/images/cannabis_medicional_ref_1_5_0.jpg";

import img_canavis3 from "../assets/images/image_content_35751916_20200520185123.jpg";
import img_canavis4 from "../assets/images/planta_1.png";
import img_canavis5 from "../assets/images/Khiron-cannabis-medicinal3.png";

import img_canavis6 from "../assets/images/MG_3927_1080X620.png";
import img_canavis7 from "../assets/images/911bb6f64463c342ebc758ad1f9000ed_XL.jpg";
import img_canavis8 from "../assets/images/911bb6f64463c342ebc758ad1f9000ed_XL.jpg";
import Footer from "../componentes/Footer";
function Index() {
  return (
    <>
      <section className="album py-5 bg-light">
        <section className="container">
          <section className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <section className="col">
              <section className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={img_canavis} />

                <section className="card-body">
                  <p className="card-text">El uso medicinal del cannabis está evolucionando rápidamente en numerosos países..</p>
                  <section className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Publicado hace 9 minutos</small>
                  </section>
                </section>
              </section>
            </section>
            <section className="col">
              <section className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={img_canavis1} />

                <section className="card-body">
                  <p className="card-text">El cannabis (también llamado marihuana o weed) es una de las plantas medicinales conocidas más antiguas. </p>
                  <section className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Publicado hace 1 día</small>
                  </section>
                </section>
              </section>
            </section>
            <section className="col">
              <section className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={img_canavis2} />

                <section className="card-body">
                  <p className="card-text">El cannabis medicinal solo se vende en farmacias y tiene que ser recetado por un médico.</p>
                  <section className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Publicado hace 7 días</small>
                  </section>
                </section>
              </section>
            </section>

            <section className="col">
              <section className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={img_canavis3} />

                <section className="card-body">
                  <p className="card-text">Las fases de proceso del cultivo de marihuana van desde la preparación de un ambiente para las plantas hasta su posterior secado.</p>
                  <section className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Publicado hace 7 días</small>
                  </section>
                </section>
              </section>
            </section>
            <section className="col">
              <section className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={img_canavis4} />

                <section className="card-body">
                  <p className="card-text">Cuando la planta alcance un palmo de altitud aproximadamente, depende mucho, podremos observar en las interse....</p>
                  <section className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Publicado hace 7 días</small>
                  </section>
                </section>
              </section>
            </section>
            <section className="col">
              <section className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={img_canavis5} />

                <section className="card-body">
                  <p className="card-text">Cuando una planta se cultiva en interior son muchos los factores que hay que controlar, pero el más importante es la luz..</p>
                  <section className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Publicado hace 15 días</small>
                  </section>
                </section>
              </section>
            </section>

            <section className="col">
              <section className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={img_canavis6} />

                <section className="card-body">
                  <p className="card-text">El cultivo en tierra es el más generalizado por ser el más típico y el "más fácil" de cultivar..</p>
                  <section className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Publicado el 24/10/2022</small>
                  </section>
                </section>
              </section>
            </section>
            <section className="col">
              <section className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={img_canavis7} />

                <section className="card-body">
                  <p className="card-text">Hay mucha variedades de nutrientes en el mercado, especializados para cultivo en hidropónico, aeropónico, y para cultivo en tierra.</p>
                  <section className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Publicado el 24/10/2022</small>
                  </section>
                </section>
              </section>
            </section>
            <section className="col">
              <section className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={img_canavis8} />

                <section className="card-body">
                  <p className="card-text">El secado de los cogollos del cannabis es una fase importante para potenciar los efectos psicoactivos de la flor.</p>
                  <section className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">Publicado el 24/10/2022</small>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>

      </section>
      <Footer />
    </>
  )
};

export default Index;