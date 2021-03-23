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

const Levitation = () => {
    return (
        <MDBAnimation type="fadeIn" delay='0'>
        <>
            <MDBTypography tag='h3' variant="h3">
                <MDBBox>Свойства</MDBBox>
            </MDBTypography>
            <MDBTypography tag='h5' variant="h5">
                <MDBBox>Эффект Мейснера (Левитация)</MDBBox>
            </MDBTypography>
            <MDBBox tag='p'>
                Помимо сверхпроводимости, сверхпроводники обладают еще одной отличительной чертой, а именно – эффектом Мейснера. Это явление быстрого затухания магнитного поля в сверхпроводнике. Сверхпроводник является диамагнетиком, то есть в магнитном поле в сверхпроводнике индуцируются макроскопические токи, которые создают собственное магнитное поле, которое полностью компенсирует внешнее.
            </MDBBox>
            <img src="img/giphy.gif" className="img-fluid d-block mb-3" alt="2" />
            <MDBTypography note noteColor='light' noteTitle='Пояснение: '>
                Магнит, левитирующий над высокотемпературным сверхпроводником, охлаждаемым жидким азотом
            </MDBTypography>
            <MDBBox tag='p'>
                Эффект Мейснера пропадает в сильных магнитных полях. В зависимости от типа сверхпроводника (об этом далее) сверхпроводящее состояние при этом либо пропадает полностью (сверхпроводники I-го рода), либо сверхпроводник сегментируется на нормальные и сверхпроводимые области (II-го рода). Именно этот эффект способен объяснить левитацию сверхпроводника над сильным магнитом, либо магнита над сверхпроводником.
            </MDBBox>
            <MDBBox display="flex" justifyContent="end">
                <MDBNavLink to="/classification" hover>
                    <MDBBtn color="white"><MDBIcon icon="arrow-left mr-2" />Классификация</MDBBtn>
                </MDBNavLink>
                <MDBNavLink to="/londonmoment" hover>
                    <MDBBtn color="white">Свойства - Момент Лондона<MDBIcon icon="arrow-right ml-2" /></MDBBtn>
                </MDBNavLink>
            </MDBBox>
        </>
        </MDBAnimation>
    );
};

export default Levitation;