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

const Kriotron = () => {
    return (
        <>
            <MDBAnimation type="fadeIn" delay='0'>
                <MDBTypography tag='h3' variant="h3">
                    <MDBBox>Применение</MDBBox>
                </MDBTypography>
                <MDBTypography tag='h5' variant="h5">
                    <MDBBox>Криотрон</MDBBox>
                </MDBTypography>
                <MDBBox tag='p'>
                    Криотрон – еще одно применение сверхпроводимости, которое может быть полезно для техники и электронных приборов. Это такое устройство, которое может переключать состояние сверхпроводника из обычного в сверхпроводящее за очень короткое время (от 10⁻⁶ до 10⁻¹¹с). Криотроны могут быть использованы в информационных системах, связанных с запоминанием и кодированием. Так впервые они применялись как запоминающие устройства в ЭВМ. Также криотроны могут помочь в области криоэлектроники, среди задач которой – повысить чувствительность приемников сигнала и сохранить форму сигнала как можно лучше. Здесь достижению поставленных целей способствуют низкие температуры и эффект сверхпроводимости.
                </MDBBox>
                <MDBBox display="flex" justifyContent="end">
                    <MDBNavLink to="/train" hover>
                        <MDBBtn color="white"><MDBIcon icon="arrow-left mr-2" />Применение - Поезд на магнитной подушке</MDBBtn>
                    </MDBNavLink>
                    <MDBNavLink to="/last" hover>
                        <MDBBtn color="white">Применение - Изобретения и исследования последних лет<MDBIcon icon="arrow-right ml-2" /></MDBBtn>
                    </MDBNavLink>
                </MDBBox>
            </MDBAnimation>
        </>
    );
};

export default Kriotron;