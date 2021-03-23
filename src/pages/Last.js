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

const Last = () => {
    return (
        <>
            <MDBAnimation type="fadeIn" delay='0'>
                <MDBTypography tag='h3' variant="h3">
                    <MDBBox>Применение</MDBBox>
                </MDBTypography>
                <MDBTypography tag='h5' variant="h5">
                    <MDBBox>Изобретения и исследования последних лет</MDBBox>
                </MDBTypography>
                <MDBBox tag='p'>
                    Также, в силу отсутствия сопротивления в сверхпроводниках, кабели из такого вещества доставляли бы электричество без потерь на нагревание, что значительно бы повысило эффективность электроснабжения. Сегодня такие кабели требуют охлаждения посредством жидкого азота, что повышает цену на их эксплуатацию. Однако, исследования в этой сфере ведутся, и первая электропередача на основе сверхпроводников была приведена в эксплуатацию в Нью-Йорке 2008-м году компанией American Superconductor. В 2015-м году Южная Корея объявила о намерении создать несколько тысяч километров сверхпроводящих линий электропередач. Если добавить к этому недавнее открытие сверхпроводимости графена при комнатной температуре, то в ближайшее время следует ожидать глобальные изменения в области электроснабжения.
                </MDBBox>
                <img src="img/20.jpg" className="img-fluid d-block mb-3" alt="2" />
                <MDBTypography note noteColor='light' noteTitle='Пояснение: '>
                    Самая близкая к идеальной сфера из всех когда-либо созданных человеком — ротор гироскопа GP-B. Сфера сделана из кварцевого стекла и покрыта тонкой плёнкой сверхпроводящего ниобия. Поверхности кварца отполированы до атомарного уровня.
                </MDBTypography>
                <MDBBox tag='p'>
                    Кроме указанных областей применения, сверхпроводимость применяется в измерительной технике, начиная от детекторов фотонов и заканчивая измерением геодезической прецессии посредством сверхпроводящих гироскопов на космическом аппарате «Gravity Probe B». Это измерение подтвердило предсказание Эйнштейна о наличии таковой прецессии по причинам, изложенным в Общей теории относительности. Не углубляясь в механизм измерения, следует отметить, что данные о геодезической прецессии Земли позволяют точно калибровать искусственные спутники Земли.
                </MDBBox>
                <MDBBox display="flex" justifyContent="end">
                    <MDBNavLink to="/kriotron" hover>
                        <MDBBtn color="white"><MDBIcon icon="arrow-left mr-2" />Применение - Криотрон</MDBBtn>
                    </MDBNavLink>
                </MDBBox>
            </MDBAnimation>
        </>
    );
};

export default Last;