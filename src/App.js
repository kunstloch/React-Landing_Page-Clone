import React from 'react';
import styled, { css } from 'styled-components';
import logo from './logo.png';
import backgroundOrange from './backgroundOrange.png';
import ebook from './ebook.png';
import handleft from './handleft.png';
import handright from './handright.png';
import facebook from './facebook.png';
import twitter from './twitter.png';
import linkedin from './linkedin.png';
import mail from './mail.png';
import pinterest from './pinterest.png';

const Logo = styled.img`
  position: left;
  width: 350px;
`;

const Header = styled.header`
  background-image: none;
  width: 100%;
  background-color: white;
  height: 90px;
  padding: 23px 0 45px 6%;
  min-height: 0;
  position: fixed;
  z-index: 1;
`;

const Main = styled.main`
  padding-top: 130px;
`;

const Content = styled.div`
  width: 60%;
  height: auto;
  display: block;
  padding-left: 170px;
`;

const ImageWidget = styled.img`
  margin: 0 auto;
  display: block;
`;

const Contact = styled.div`
  /* width: 400px;
  height: auto;
  position: fixed;
  display: block; */
  position: fixed;
  right: 8%;
  top: 0;
  width: 23%;
  min-width: 310px;
  height: 100%;
  color: white;
  background: #f18e2d;
  padding: 30px;
  padding-top: 120px;
  overflow-y: auto;
`;

const HandLeft = styled.img`
  margin-left: -170px;
  padding-left: 0;
  margin-right: 25px;
  float: left;
`;

const HLast = styled.h1`
  margin: 10px 10px 0 0;
  padding: 0 0 0 0;
`;

const Icon = styled.img`
  margin-right: 2%;
  margin-top: 10px;
  padding: 0;
`;

const HandRight = styled.img`
  position: fixed;
  right: -110px;
  top: 63px;
  width: 290px;
  z-index: 2;
`;

const Em = styled.em`
  color: #444;
  font-style: italic;
`;

const ContactH = styled.h2`
  color: white;
`;

const Div = styled.div`
  margin: 30px 0;
  display: block;
  background: #f18e2d;

  & input {
    background: #f18e2d;
    /* display: block; */
    margin: 30px 0;
  }

  & label {
    background: #f18e2d;
    margin: 30px 0;
  }
`;

const CheckboxLabel = styled.label`
  display: inline-block;
`;

const Textarea = styled.textarea`
  width: 100%;
  display: inline-block;
  float: left;
  background: #f18e2d;
  border: 0px;
  padding: 6px 6px 1px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  color: white;
  box-shadow: none;
  outline: none;
  border-radius: 0;
`;

function App() {
  return (
    <body>
      <Header>
        <Logo src={logo} />
      </Header>
      <Main>
        <Content>
          <ImageWidget src={ebook} width="325" />
          <h1>eBook gratis: Diccionario del Inbound Marketing</h1>
          <h2>REPASA LOS CONCEPTOS CLAVE DEL MARKETING DIGITAL ACTUAL</h2>

          <p>
            <Em>CTR</Em>, algoritmo, tasa de rebote, <Em>gamification</Em>,{' '}
            <Em>engagement</Em>, <Em>social proof</Em>… La innovación en el
            mundo <Em>online</Em> es constante. Pero, con tanta jerga nueva, hay
            veces en las que hasta los profesionales más veteranos del marketing
            se quedan en blanco.
          </p>
          <p>
            El glosario gratuito que te ofrecemos reúne los 75 términos
            principales del Inbound Marketing del momento, explicados de manera
            clara y directa: hemos pensado que así le ahorrarías a tu becario
            más de un dolor de cabeza, el resto de la empresa podría empezar a
            entender lo que se cuece en las reuniones y tú dejarías de gastar
            saliva repitiéndote…
          </p>
          <p>
            Esta guía con la terminología del Inbound Marketing te servirá para:
            <ul>
              <li>
                Descubrir términos y nociones básicos del marketing digital.
              </li>
              <li>
                Repasar conceptos y tendencias del Inbound Marketing actual.
              </li>
              <li>
                Compartir la guía con toda la empresa y usarla como material de
                formación.
              </li>
            </ul>
          </p>
          <p>
            <HandLeft src={handleft} />
            <HLast>COMPARTE EMOCIÓN</HLast>
            <Icon src={facebook} />
            <Icon src={linkedin} />
            <Icon src={twitter} />
            <Icon src={pinterest} />
            <Icon src={mail} />
          </p>
        </Content>
      </Main>
      <Contact>
        <HandRight src={handright} />
        <ContactH>EBOOK DICCIONARIO DEL INBOUND MARKETING</ContactH>
        <Div>
          <label>Nombre*</label>
          <input></input>
          <label>Rellena este campo obligatorio.</label>
        </Div>
        <Div>
          <label>Apellido*</label>
          <input></input>
          <label>Rellena este campo obligatorio.</label>
        </Div>
        <Div>
          <label>Email*</label>
          <input></input>
          <label>Rellena este campo obligatorio.</label>
        </Div>
        <Div>
          <label>Website URL*</label>
          <input></input>
        </Div>
        <Div>
          <label>Facturación*</label>
          <input></input>
          <label>Selecciona una opción del menú desplegable.</label>
        </Div>
        <Div>
          <Div>
            <label>Objetivos de marketing para los próximos 12 meses</label>
            <Textarea cols="35" rows="4"></Textarea>
          </Div>
          <input type="checkbox" />
          <label>Me interesa sólo estrategia*</label>
          <Div>
            <input type="checkbox" />
            <label>Me interesa estrategia y ejecución de campaña</label>
          </Div>
          <Div>
            <input type="checkbox" />
            <label>Me interesa formación para gestionarlo internamente</label>
          </Div>
          <Div>
            <input type="checkbox" />
            <CheckboxLabel>Otros</CheckboxLabel>
            <br />
            <label>Selecciona al menos una opción.</label>
          </Div>
          <Div>
            <input type="checkbox" />

            <CheckboxLabel>
              Doy mi consentimiento para el tratamiento de mis datos personales.
              He leído y acepto la política de privacidad*
            </CheckboxLabel>
          </Div>

          <input></input>
        </Div>
      </Contact>
    </body>
  );
}

export default App;
