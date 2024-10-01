import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import beneficioCaminhao from "./assets/img/beneficioCaminhao.svg";
import beneficioCheckout from "./assets/img/beneficioCheckout.svg";
import beneficioFone from "./assets/img/beneficioFone.svg";

import Header from "./components/Header/Header.jsx";
import HeaderPromocao from "./components/HeaderPromocao/HeaderPromocao.jsx";
import CarrosselIphone from "./components/CarrosselIphone/CarrosselIphone.jsx";
import Section from "./components/Section/Section.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Beneficios from "./components/Beneficios/Beneficios.jsx";
import ItemByCategory from "./components/ItemBycategory/ItemByCategory.jsx";

import phoneCategory from "./assets/img/Category-CellPhone.svg";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeaderPromocao></HeaderPromocao>
    <Header />

    <CarrosselIphone />

    <Section subtitle="Today's" title="Flash Sales" />

    <Section subtitle="Categories" title="Browse By Category" />

    <div class="categoryGroup">
      <ItemByCategory titulo="Phones" imagem={phoneCategory}></ItemByCategory>
      <ItemByCategory titulo="Phones" imagem={phoneCategory}></ItemByCategory>
      <ItemByCategory titulo="Phones" imagem={phoneCategory}></ItemByCategory>
      <ItemByCategory titulo="Phones" imagem={phoneCategory}></ItemByCategory>
      <ItemByCategory titulo="Phones" imagem={phoneCategory}></ItemByCategory>
      <ItemByCategory titulo="Phones" imagem={phoneCategory}></ItemByCategory>
    </div>

    <Section subtitle="This Month" title="Best Selling Products" />

    <Section subtitle="Our Products" title="Explore Our Products" />

    <div class="conjuntoBeneficios">
      <Beneficios
        titulo="FREE AND FAST DELIVERY"
        subtitulo="Free delivery for all orders over $140"
        imagem={beneficioCaminhao}
      ></Beneficios>
      <Beneficios
        titulo="24/7 CUSTOMER SERVICE"
        subtitulo="Friendly 24/7 customer support"
        imagem={beneficioFone}
      ></Beneficios>
      <Beneficios
        titulo="MONEY BACK GUARANTEE"
        subtitulo="We reurn money within 30 days"
        imagem={beneficioCheckout}
      ></Beneficios>
    </div>

    <Footer></Footer>
  </StrictMode>
);
