import React from "react";
import "../css/main.css";

function MainContent() {
    
  return (
    <div className="landing">
      <main>
        <article className="mx-auto p-4">
          <div className="mx-4">
            <h1 className="text-left py-2 text-decoration-underline">
              ¿Quiénes somos?
            </h1>
            <p className="rounded-2 float-left w-50 text-center py-4 custom-bg">
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
            <div className="py-4 mx-5">
              <a
                href="mas-info"
                className="btn btn-primary py-4"
                style={{ marginLeft: "28vh" }}
              >
                Más información
              </a>
            </div>
          </div>
        </article>
      </main>

      <footer className="mt-auto text-black-50 text-center colorPrincipal fixed-bottom">
        <p className="text-light">
          © Copyright by:{" "}
          <a href="#" className="text-light">
            @JobUniteContact
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default MainContent;
