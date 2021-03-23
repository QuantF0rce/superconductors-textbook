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

const Uniquenesses = () => {
    return (
        <>
            <MDBAnimation type="fadeIn" delay='0'>
            <MDBTypography tag='h3' variant="h3">
                <MDBBox>Свойства сверхпроводимости</MDBBox>
            </MDBTypography>
            <MDBBox tag='p'>
                Особенные свойства сверхпроводников, которые используются в современных технологиях:
            </MDBBox>
            <MDBTypography className='pl-4' list>
                <li>Сверхпроводники имеют сопротивление около нуля, а значит, могут проводить ток без тепловых потерь, если они находятся при температурах ниже критических, в магнитных полях и токах ниже критических;</li>
                <li>В том случае, если сверхпроводники находятся в магнитных полях ниже некоторого критического значения, то сверхпроводник является идеальным диамагнетиком (магнитное поле внутрь сверхпроводника не проникает);</li>
                <li>Если сверхпроводник имеет форму кольца или цилиндра, то его магнитный момент изменяется дискретно (на квант магнитного потока);</li>
                <li>Если частота тока ниже критической, то поверхностное сопротивление сверхпроводника в десятки и даже сотни раз меньше, чем у хороших проводников при той же температуре.</li>
            </MDBTypography>
            <img src="img/superconduction.jpg" className="img-fluid mx-auto d-block" alt="2" />
                <MDBBox display="flex" justifyContent="end">
                    <MDBNavLink to="/exitones" hover>
                        <MDBBtn color="white"><MDBIcon icon="arrow-left mr-2" />Экзитоны</MDBBtn>
                    </MDBNavLink>
                    <MDBNavLink to="/classification" hover>
                        <MDBBtn color="white">Классификация<MDBIcon icon="arrow-right ml-2" /></MDBBtn>
                    </MDBNavLink>
                </MDBBox>
            </MDBAnimation>
        </>
    );
};

export default Uniquenesses;