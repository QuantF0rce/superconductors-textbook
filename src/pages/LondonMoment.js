import React from 'react';
import {
    MDBBtnGroup,
    MDBIcon,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBBtn, MDBTypography, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBox, MDBAnimation, MDBNavLink
} from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const LondonMoment = () => {
    return (
        <MDBAnimation type="fadeIn" delay='0'>
            <>
                <MDBTypography tag='h3' variant="h3">
                    <MDBBox>Свойства</MDBBox>
                </MDBTypography>
                <MDBTypography tag='h5' variant="h5">
                    <MDBBox>Момент Лондона</MDBBox>
                </MDBTypography>
                <MDBBox tag='p'>
                    Еще одно интересное свойство сверхпроводника – момент Лондона. Суть феномена заключается в том, что вращающийся сверхпроводник создает магнитное поле, которое выравнивается точно вдоль оси вращения проводника.
                </MDBBox>
                <MDBBox tag='p'>
                    Дальнейшее исследование этого явления привело к открытию гравити магнитного момента Лондона. В 2006-м году исследователи Мартин Таджмар из института ARC Seibersdorf Research, Австрия, и Кловис де Матос из Европейского космического агентства (ESA) обнаружили, что вращающийся с ускорением сврехпроводник генерирует также и гравитационное поле. Однако такое гравитационное поле слабее земного примерно в 100 миллионов раз.
                </MDBBox>
                <img src="img/londonmoment.jpg" className="img-fluid d-block mb-3" alt="2" />
                <MDBBox display="flex" justifyContent="end">
                    <MDBNavLink to="/levitation" hover>
                        <MDBBtn color="white"><MDBIcon icon="arrow-left mr-2" />Свойства - Эффект Мейснера (Левитация)</MDBBtn>
                    </MDBNavLink>
                    <MDBNavLink to="/usage" hover>
                        <MDBBtn color="white">Применение - Линии передачи данных<MDBIcon icon="arrow-right ml-2" /></MDBBtn>
                    </MDBNavLink>
                </MDBBox>
            </>
        </MDBAnimation>
    );
};

export default LondonMoment;