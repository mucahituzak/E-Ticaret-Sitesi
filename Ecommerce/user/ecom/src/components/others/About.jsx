import React, { Component, Fragment } from 'react'
import { Button } from 'react-bootstrap'
import { Row, Col, Form } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

 class About extends Component {







  
  render() {
    return (
        
                  <Fragment>
                  <Container>
                      <Row className="p-2">
                          <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                            <h4 className="section-title-login">About Us</h4> 
                            <p className="section-title-contact">Güçlü teknolojimiz, herkesin kişiselleştirilmiş ve profesyonel bir şekilde internet ortamına geçmesini sağlar. İster yeni başlayan biri olun, ister bir uzman. Profesyonel bir site kurmak için ihtiyacınız olan tüm özellikleri ve çözümleri sunuyoruz. Yaratıcılığınızı serbest bırakın!<br></br><br></br><br></br>


Küresel kullanıcı tabanımız, herkese açık yazılım geliştirme kitimiz ve benzersiz tasarım özelliklerimiz eşsiz bir ekosistem oluşturur. Ortaklarımız, yazılım geliştiriciler, web tasarımcıları ve internet dünyasının tüm profesyonelleri, Wix aracılığıyla kendi uygulamalarını ve hizmetlerini milyonlarla paylaşabilirler.
                            </p>
                          </Col>
                      </Row>
                  </Container>
                </Fragment>
    )
  }
}

export default About