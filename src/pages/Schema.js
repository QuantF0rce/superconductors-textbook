import React from 'react';
import {
  MDBIcon,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn, MDBTypography, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBox, MDBAnimation, MDBNavLink
} from 'mdbreact';

const Schema = () => {
  return (
      <>
        <MDBAnimation type="fadeIn" delay='0'>
        <MDBTypography tag='h3' variant="h3">
          <MDBBox>Схема</MDBBox>
        </MDBTypography>
        <MDBBox tag='p'>
          Мы изучили современную научную литературу по этому вопросу и постарались максимально упрощенно рассказать о том, как самые разные и, казалось бы, не связанные между собой процессы, могут привести к сверхпроводимости.
        </MDBBox>
        <MDBContainer>
          <MDBCard className='border border-primary'>
            <MDBCardBody>
              <h1 className='text-center'>Сверхпроводник</h1>
            </MDBCardBody>
          </MDBCard>
          <MDBRow>
            <MDBCol className='text-center'>
              <MDBIcon icon="long-arrow-alt-down" className='text-center h1-responsive' />
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Первого рода</MDBCardTitle>
                  <MDBCardTitle tag="h6" sub className="mb-2 text-muted">
                    Происходит полное выталкивание внешнего поля
                  </MDBCardTitle>
                  <MDBCardText>
                    (Алюминий, свинец, олово)
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className='text-center'>
              <MDBIcon icon="long-arrow-alt-down" className='text-center h1-responsive' />
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Второго рода</MDBCardTitle>
                  <MDBCardTitle tag="h6" sub className="mb-2 text-muted">
                    Не происходит полного выталкивания магнитного поля
                  </MDBCardTitle>
                  <MDBCardText>
                    (Сплавы, ниобий, ванадий)
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>

        </MDBContainer>
          <MDBBox display="flex" justifyContent="end">
            <MDBNavLink to="/" hover>
              <MDBBtn color="white"><MDBIcon icon="arrow-left mr-2" />Начало</MDBBtn>
            </MDBNavLink>
            <MDBNavLink to="/phonones" hover>
              <MDBBtn color="white">Фононы<MDBIcon icon="arrow-right ml-2" /></MDBBtn>
            </MDBNavLink>
          </MDBBox>
        </MDBAnimation>
      </>
  );
};

export default Schema;
