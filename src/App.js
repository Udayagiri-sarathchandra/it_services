//App.js-> Module
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//Nested components

import Menu from './assets/js/menu'
import Carousel from './assets/js/carousel'
import About from './assets/js/about'
import Services from './assets/js/Services'
import Team from './assets/js/team'
import Clients from './assets/js/Clients'
import Testimonials from './assets/js/Testimonials'
import Industries from './assets/js/Industries'
import Careers from './assets/js/Careers'
import Address from './assets/js/Adress'
import Footer from './assets/js/footer'
import Pagenotfound from './assets/js/PagenotFound'


//experiments......
import Props from './assets/js/Props'
import Newservive from './assets/js/newservices'
import RBUIs from './RBUI.js'
import Greet from './examples'
import State from './StateEx.js'
import State1 from './StateEx1'
import State3 from './StateEx3'
import State4 from './StateEx.4'
import State5 from './StateEx5'
import State6 from './StateEx6'
import State7 from './StateEx7'
import State8 from './StateEx8'
import Api from './Restapi'
// import Api2 from './Restapi2'
import Router_para from './Router_with_Para'


//class_Components
import UserClass from './assets/js/Userclass'
import UserClass1 from './assets/js/UserClass1'

//App_Root_Components_Module
function App() {
  return (<>

    <BrowserRouter>
      <Menu />
      {/* <Carousel /> */}

      <Switch>
        {/* <Route  exact path="/" component={Menu} /> */}
        <Route exact path="/" component={Carousel} />
        <Route exact path="/" component={About} />
        <Route exact path="/assets/js/about" component={About} />
        <Route exact path="/assets/js/newservices" component={Newservive} />
        <Route exact path="/assets/js/Services" component={Services} />
        <Route exact path="/assets/js/team" component={Team} />
        <Route exact path="/assets/js/Clients" component={Clients} />
        <Route exact path="/assets/js/Testimonials" component={Testimonials} />
        <Route exact path="/assets/js/Industries" component={Industries} />
        <Route exact path="/assets/js/Careers" component={Careers} />
        <Route exact path="/assets/js/Adress" component={Address} />
        <Route exact path="/assets/js/RBUI" component={RBUIs} />
        <Route exact path="/Restapi" component={Api} />
        <Route exact path="/Restapi/:phone" component={Router_para} />
        <Route component={Pagenotfound} />
      </Switch>
      <Footer />
      <Props />
      <UserClass />
      <UserClass1 />
      <Greet />
      <State />
      <State1 />
      <State3 />
      <State4 />
      <State5 />
      <State6 />
      <State7 />
      <State8 />
      {/* <Api2 /> */}
    </BrowserRouter>


  </>)
}

export default App;