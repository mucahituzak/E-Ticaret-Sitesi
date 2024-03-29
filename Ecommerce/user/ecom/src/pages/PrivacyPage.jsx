import React, { Component, Fragment } from 'react'
import Privacy from '../components/others/Privacy'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'


 class PrivacyPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
      }
  render() {
    return (
        <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
        </div>

        <div className="Mobile">
          <NavMenuMobile />
        </div>

        <Privacy/>

        <div className="Desktop">
                <FooterDesktop/>
                </div>

       <div className="Mobile">
        <FooterMobile/>
       </div>
        
    </Fragment>
    )
  }
}

export default PrivacyPage