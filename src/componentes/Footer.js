function Footer() {
  return (
    <>


      <footer className="bg-dark text-center text-white">

        <div className="container p-4 pb-0">

          <section className="mb-4">

            <a class="btn  btn-floating m-1 facebook" href="#!" role="button">
              <i class="fab fa-facebook-f"></i></a>

            <a class="btn btn-primary btn-floating m-1" href="#!" role="button">
              <i class="fab fa-twitter"></i></a>

            <a class="btn  btn-floating m-1 google" href="#!" role="button">
              <i class="fab fa-google"></i></a>


            <a class="btn instagram btn-floating m-1" href="#!" role="button">
              <i class="fab fa-instagram"></i></a>

            <a class="btn  btn-floating m-1 git" href="#!" role="button">
              <i class="fab fa-github"></i></a>
          </section>

        </div>



        <div className="text-center p-3" >
          <p>© 2022 Copyright - HappyAgro - Desarrollada por Santiago Gaviria</p>
        </div>

      </footer>


    </>

  );
}
export default Footer;