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

const Train = () => {
    return (
        <>
            <MDBAnimation type="fadeIn" delay='0'>
                <MDBTypography tag='h3' variant="h3">
                    <MDBBox>Применение</MDBBox>
                </MDBTypography>
                <MDBTypography tag='h5' variant="h5">
                    <MDBBox>Поезд на магнитной подушке</MDBBox>
                </MDBTypography>
            <img src="img/last.jpg" className="img-fluid mx-auto d-block mb-3" alt="2" />
            <MDBBox tag='p'>
                Маглев, или поезд на магнитной подушке, — это состав, который удерживается над дорожным полотном и движется силой электромагнитного поля. В основу маглева положено базовое свойство магнитов: одинаковые полюса отталкиваются, а разные – притягиваются. В настоящий момент существует две основные технологии магнитного подвеса: электромагнитная EMS и электродинамическая EDS. В поездах первого типа под днищем вагона крепятся мощные магниты в сантиметрах от Т-образного стального полотна. При движении поезда магнитный поток, проходящий через контур полотна, постоянно меняется, и в нем возникают сильные индукционные токи. Они создают мощное магнитное поле, которое отталкивает магнитную подвеску поезда. Состав левитирует за счёт отталкивания одинаковых полюсов и притягивания разных полюсов магнитов. А специальная система сохраняет величину зазора между магнитами в 15 миллиметров постоянной. При увеличении зазора система повышает силу тока в несущих магнитах и приближает вагон, при уменьшении — понижает силу тока, и зазор увеличивается. Также на электромагнитные маглевы устанавливаются специальные батареи, позволяющие поезду левитировать при остановке. Движение поезда осуществляется линейным двигателем – поочерёдно включаются обмотки статора, создавая бегущее магнитное поле. Статор поезда втягивается в это поле и движет весь состав. При этом с частотой 4000 раз в секунду происходит смена полюсов на магнитах путем попеременной подачи тока. Изменение силы и частоты тока позволяет регулировать скорость состава. Существует также электродинамическая EDS-технология, при которой движение маглева осуществляется за счет взаимодействия двух полей. Одно из них создается в дорожном полотне, а второе – на корпусе поезда. В отличие от EMS с обычными магнитами, EDS использует сверхпроводящие электромагниты, которые могут проводить электричество даже после отключения источника питания.
            </MDBBox>
                <img src="img/china_train.jpg" className="img-fluid d-block mb-3" alt="2" />
                <MDBTypography note noteColor='light' noteTitle='Пояснение: '>
                    Поезд на магнитном подвеске в Шанхае, Китай
                </MDBTypography>
                <MDBBox display="flex" justifyContent="end">
                    <MDBNavLink to="/usage" hover>
                        <MDBBtn color="white"><MDBIcon icon="arrow-left mr-2" />Применение - Линии передачи данных</MDBBtn>
                    </MDBNavLink>
                    <MDBNavLink to="/kriotron" hover>
                        <MDBBtn color="white">Применение - Криотрон<MDBIcon icon="arrow-right ml-2" /></MDBBtn>
                    </MDBNavLink>
                </MDBBox>
            </MDBAnimation>
        </>
    );
};

export default Train;