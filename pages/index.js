import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ancon Digital SA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@900&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav>
          <div className="bar">
            <div className="nav-item username">Ancon Digital</div>
            <div className="nav-item nav-link">
              {/* <details> */}
              <summary>
                <a href="#quienessomos"> &#128076; Quienes somos? </a>
              </summary>
              {/* </details> */}
            </div>
            <div className="nav-item nav-link">
              {/* <details> */}
              <summary>
                <a href="#servicios"> &#128161; Servicios</a>
              </summary>
              {/* </details> */}
            </div>
            <div className="nav-item nav-link">
              {/* <details> */}
              <summary>
                <a href="#portafolio"> &#128203; Portafolio</a>
              </summary>
              {/* </details> */}
            </div>
            <div className="nav-item nav-link">
              {/* <details> */}
              <summary>
                <a href="#contacto"> &#128231; Contáctanos</a>
              </summary>
              {/* </details> */}
            </div>
          </div>
        </nav>
        {/* <!-- titulo-central --> */}
        <div className="container">
          <div className="titlePage">
            <div>
              <h1>Digitaliza tu negocio Avanza</h1>
            </div>
            <div>
              <h1> despega y evoluciona!</h1>
            </div>
          </div>
          <iframe
            className="video-mobil"
            width="99%"
            height="315px"
            src="https://www.youtube.com/embed/aJzQDpzC828"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h2 id="quienessomos">Quienes somos?</h2>
          <p className="Hero">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
            nostrum illo fuga corrupti repudiandae ipsam, enim officia sint
            excepturi aperiam maiores? Aperiam unde ad temporibus cupiditate
            aliquid, eaque quis quibusdam? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Eaque nostrum illo fuga corrupti
            repudiandae ipsam, enim officia sint excepturi aperiam maiores?
            Aperiam unde ad temporibus cupiditate aliquid, eaque quis quibusdam?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
            nostrum illo fuga corrupti repudiandae ipsam, enim officia sint
            excepturi aperiam maiores? Aperiam unde ad temporibus cupiditate
            aliquid, eaque quis quibusdam? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Eaque nostrum illo fuga corrupti
            repudiandae ipsam, enim officia sint excepturi aperiam maiores?
            Aperiam unde ad temporibus cupiditate aliquid, eaque quis quibusdam?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
            nostrum illo fuga corrupti repudiandae ipsam, enim officia sint
            excepturi aperiam maiores? Aperiam unde ad temporibus cupiditate
            aliquid, eaque quis quibusdam?
          </p>

          <h2>Servicios disponibles</h2>
          <h3>
            Desarrollos a la medida, soluciones basadas en previos estudios de
            las necesidades reales
          </h3>
          <img
            id="imagendeproyecto"
            src="/web.png"
            alt="servicio de diseño web"
            title=" servicio de diseño web"
          ></img>
          <img
            id="imagendeproyecto"
            src="/grafico.png"
            alt="servicio de Marketing"
            title=" servicio de diseño grafico"
          ></img>
          <img
            id="imagendeproyecto"
            src="/marketing.png"
            alt="servicio de marketing digital"
            title=" servicio de marketing digital"
          ></img>
          <p>
            <strong> DISEÑO WEB : </strong> Lorem ipsum dolor sit, am aperiam
            voluptate laboriosam harum.
            <strong> DISEÑO GRAFICO : </strong> Lorem ipsum dolor, repudiandae
            facere iste eligendi, eos nisir nisi excepturi!
            <strong> MARKETING DIGITAL: </strong> Lorem ipsum dolor sit amet
            consectetur, a vel doloremque.
            <strong>
              Cerca del 90% de los comercios en el mundo funcionan con
              componentes digitales.
            </strong>
          </p>
          <h1 id="portafolio">Ultimos proyectos realizados</h1>
          <div className="card">
            <p>
              <img
                className="image-card"
                src="/cliente4.png"
                alt="servicio de diseño web"
                title=" servicio de diseño web"
              ></img>
              <strong id="ELEMENTO"> Titulo:</strong>
              Lorem ipsum dolor sit, am aperiam voluptate laboriosam harum
              <a href="https://aplacitos.com" target="_blank">
                <button className="button-card">Ver más &#128270;</button>
              </a>
            </p>
          </div>
          <div className="card">
            <p>
              <img
                className="image-card"
                src="/cliente1.png"
                alt="servicio de diseño web"
                title=" servicio de diseño web"
              ></img>
              <strong id="ELEMENTO"> Titulo:</strong>
              Lorem ipsum dolor sit, am aperiam voluptate laboriosam harum
              <a href="https://dannyduranmusic.com" target="_blank">
                <button className="button-card">Ver más &#128270;</button>
              </a>
            </p>
          </div>
          <div className="card">
            <p>
              <img
                className="image-card"
                src="/cliente3.png"
                alt="servicio de diseño web"
                title=" servicio de diseño web"
              ></img>
              <strong id="ELEMENTO"> prueba:</strong>
              Lorem ipsum dolor sit, am aperiam voluptate laboriosam harum
              <a href="https://www.laagenciainmobiliaria.com/" target="_blank">
                <button className="button-card">Ver más &#128270;</button>
              </a>
            </p>
          </div>
          <div className="card">
            <p>
              <img
                className="image-card"
                src="/cliente2.png"
                alt="portafolio"
                title=" portafolio"
              ></img>
              <strong id="ELEMENTO"> prueba:</strong>
              Lorem ipsum dolor sit, am aperiam voluptate laboriosam harum
              <a>
                <button className="button-card">Ver más &#128272;</button>
              </a>
            </p>
          </div>
          <div className="card">
            <p>
              <img
                className="image-card"
                src="/cliente5.png"
                alt="portafolio"
                title=" portafolio"
              ></img>
              <strong id="ELEMENTO"> prueba:</strong>
              Lorem ipsum dolor sit, am aperiam voluptate laboriosam harum
              <a>
                <button className="button-card">Ver más &#128272;</button>
              </a>
            </p>
          </div>

          <div className="card">
            <p>
              <img
                className="image-card"
                src="/cliente6.png"
                alt="portafolio"
                title=" portafolio"
              ></img>
              <strong id="ELEMENTO"> prueba:</strong>
              Lorem ipsum dolor sit, am aperiam voluptate laboriosam harum
              <a>
                <button className="button-card">Ver más &#128272;</button>
              </a>
            </p>
          </div>

          {/* <!-- boton de whatsapp --> */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
            inventore quas delectus excepturi iusto? Fugit vel error illo
            maiores, possimus illum tenetur consectetur rerum veniam ipsum
            facilis impedit? Necessitatibus, soluta.
          </p>
          <a href="https://api.whatsapp.com/send?phone=50766937639&text=Hola,%20he%20visto%20su%20numero%20en%20el%20enlace%20de%20ancon%20digital%20sa%20">
            <button className="button">
              &nbsp; Haz clic aquí, hablemos!&nbsp; &#9995;
            </button>
          </a>
        </div>
      </main>

      <footer className="afooter" id="contacto">
        <div>
          <a href="https://api.whatsapp.com/send?phone=50766937639&text=Hola,%20he%20visto%20su%20numero%20en%20el%20enlace%20de%20ancon%20digital%20sa%20">
            contacto{" "}
          </a>
        </div>
        <div>
          <a href="mailto:info@ancondigitalsa.com">
            {" "}
            &#128231; info@aquivaelcorreo.com‎{" "}
          </a>
        </div>
        <div className="copy-right">
          Desarrollado por Ancon Digital SA © Copyright 2021
        </div>
      </footer>
    </div>
  );
}
