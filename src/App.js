import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink,
  MDBTooltip,
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBNav,
  MDBAnimation
} from 'mdbreact';
import { HashRouter as Router, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/logo.svg';
import Routes from './Routes';
class App extends Component {
  state = {
    activeItemPills: '1'
  };

  togglePills = tab => () => {
    const { activePills } = this.state;
    if (activePills !== tab) {
      this.setState({
        activeItemPills: tab
      });
    }
  };

  render() {
    const { activeItemPills } = this.state;

    return (
      <Router>
        <div className='flyout'>
          <div>
            <MDBNavbar color='white' dark>
              <div className='py-0'>
                <MDBNavbarBrand href='/' className='font-weight-bold black-text'>
                  <img src='img/logo.jpeg' style={{ height: '6rem', width: '6rem' }} />
                </MDBNavbarBrand>
                <MDBNavbarBrand href='/' className='align-middle font-weight-bold black-text'>
                  <h4 className='align-middle'>УИГА</h4>
                  <h4 className='align-middle'>имени Главного маршала авиации Б.П. Бугаева</h4>
                </MDBNavbarBrand>
              </div>
              <div className='py-0 font-weight-bold black-text text-right'>
                <h5 className='align-middle'>Учебно-исследовательская программная оболочка</h5>
                <h5 className='align-middle'>«Исследование явления сверхпроводимости»</h5>
              </div>
            </MDBNavbar>

            <main className='mt-4' >
              <MDBContainer fluid>
                <MDBRow>
                  <MDBCol size={2}>
                    <MDBNav className="font-weight-bold flex-column">
                      <MDBNavLink disabled={activeItemPills === '1'} onClick={this.togglePills('1')} to="/" hover>Начало</MDBNavLink>
                      <MDBNavLink disabled={activeItemPills === '2'} onClick={this.togglePills('2')} to="/schema" hover>Схема</MDBNavLink>
                      <MDBNavLink disabled={activeItemPills === '3'} onClick={this.togglePills('3')} to="/phonones" hover>Фононы</MDBNavLink>
                      <MDBNavLink disabled={activeItemPills === '4'} onClick={this.togglePills('4')} to="/magnones" hover>Магноны</MDBNavLink>
                      <MDBNavLink disabled={activeItemPills === '5'} onClick={this.togglePills('5')} to="/exitones" hover>Экзитоны</MDBNavLink>
                      <MDBNavLink disabled={activeItemPills === '6'} onClick={this.togglePills('6')} to="/uniquenesses" hover>Особенности</MDBNavLink>
                      <MDBNavLink disabled={activeItemPills === '7'} onClick={this.togglePills('7')} to="/classification" hover>Классификация</MDBNavLink>
                      <MDBNavLink disabled to="" hover>Свойства</MDBNavLink>
                      <ul>
                        <li>
                          <MDBNavLink disabled={activeItemPills === '8'} onClick={this.togglePills('8')} to="/levitation" hover>Эффект Мейснера (Левитация)</MDBNavLink>
                        </li>
                        <li>
                          <MDBNavLink disabled={activeItemPills === '9'} onClick={this.togglePills('9')} to="/londonmoment" hover>Момент Лондона</MDBNavLink>
                        </li>
                      </ul>
                      <MDBNavLink disabled to="" hover>Применение</MDBNavLink>
                      <ul>
                        <li>
                          <MDBNavLink disabled={activeItemPills === '10'} onClick={this.togglePills('10')} to="/usage" hover>Линии Передачи данных</MDBNavLink>
                        </li>
                        <li>
                          <MDBNavLink disabled={activeItemPills === '11'} onClick={this.togglePills('11')} to="/train" hover>Поезд на магнитной подушке</MDBNavLink>
                        </li>
                        <li>
                          <MDBNavLink disabled={activeItemPills === '12'} onClick={this.togglePills('12')} to="/kriotron" hover>Криотрон</MDBNavLink>
                        </li>
                        <li>
                          <MDBNavLink disabled={activeItemPills === '13'} onClick={this.togglePills('13')} to="/last" hover>Изобретения и исследования последних лет</MDBNavLink>
                        </li>
                      </ul>



                    </MDBNav>
                  </MDBCol>
                  <MDBCol size={10}>
                      <Routes />
                  </MDBCol>
                </MDBRow>
              </MDBContainer>

            </main>
          </div>


          <MDBFooter className="font-small pt-4 mt-4">
            <div className="footer-copyright text-center black-text py-3">
              <MDBContainer fluid>
                Выполнили курсанты группы Пб-19-1 (Смирнов Е.Д., Корниюк В.П.)
              </MDBContainer>
            </div>
          </MDBFooter>

        </div>
      </Router>
    );
  }
}

export default App;
