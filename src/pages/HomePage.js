import React from 'react';
import {
    MDBTypography,
    MDBBox, MDBAnimation, MDBNavLink, MDBBtn, MDBIcon
} from 'mdbreact';
import './HomePage.css';

class HomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
        <MDBAnimation type="fadeIn" delay='0'>
      <>
        <MDBTypography tag='h3' variant="h3">
          <MDBBox>Сверхпроводники</MDBBox>
        </MDBTypography>
        <MDBBox tag='p'>
            Есть такое природное явление, которое ученые называют сверхпроводимостью, а инженеры — «будущим энергетики, медицины, скоростного транспорта и военного дела». Несмотря на то, что первые сверхпроводящие материалы были открыты более ста лет назад, применять их научились сравнительно недавно и лишь в нескольких довольно специфических приборах вроде Большого адронного коллайдера или в магнитно-резонансной томографии.
        </MDBBox>
          <MDBBox tag='p'>
              Так что же такое сверхпроводимость? Это свойство некоторых веществ обладать строго нулевым сопротивлением ниже определенной температуры — ее называют критической. Второй обязательный критерий, по которому то или иное соединение причисляют к сверхпроводникам, это эффект Мейсснера — способность материалов выталкивать магнитное поле из своего объема при охлаждении, опять же, ниже критической температуры.
          </MDBBox>
          <MDBBox display="flex" justifyContent="end">
              <MDBNavLink to="/schema" hover>
                  <MDBBtn color="white">Схема<MDBIcon icon="arrow-right ml-2" /></MDBBtn>
              </MDBNavLink>
          </MDBBox>
      </>
        </MDBAnimation>
    );
  }
}

export default HomePage;
