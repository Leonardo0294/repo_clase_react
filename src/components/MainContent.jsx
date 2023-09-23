import React from "react";
import "../css/main.css";
function MainContent() {
  const mainStyle = {
    backgroundImage: 'url("../src/assets/landing.png")', // Reemplaza con la ruta de tu imagen
    backgroundSize: "cover",
    /* Otras propiedades de estilo según sea necesario */
  };

  return (
    <main style={mainStyle}>
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-md-6">
            <h1 className="text-left py-2 text-decoration-underline">
              ¿Quiénes somos?
            </h1>
            <p className="rounded-2 text-center py-4 custom-bg">
              Job Unite es una plataforma especializada en brindar apoyo a
              jóvenes recién graduados en la búsqueda de su primera experiencia
              laboral. Nuestro objetivo principal es conectar a estos jóvenes
              talentos con oportunidades laborales relevantes y facilitarles el
              acceso al mercado laboral.
              <br />
              Ofrecemos recursos y herramientas para ayudar a los usuarios a
              construir su perfil profesional, explorar opciones de trabajo,
              establecer contactos con empresas y destacar sus habilidades y
              logros.
            </p>
            <div className="text-center">
              <a href="mas-info" className="btn btn-primary">
                Más información
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
