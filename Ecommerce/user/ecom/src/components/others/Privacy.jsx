import React, { Component, Fragment } from 'react'
import { Button } from 'react-bootstrap'
import { Row, Col, Form } from 'react-bootstrap'
import { Container } from 'react-bootstrap'


 class Privacy extends Component {
  render() {
    return (
      <Fragment>
      <Container>
          <Row className="p-2">
              <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                <h4 className="section-title-login">Privacy Page</h4> 
                <p className="section-title-contact">Privacy Policy
This Privacy Policy governs the manner in which the School collects, uses, maintains and discloses information collected from users (each, a “Student”) of the School. This Privacy Policy applies to the School and all Courses offered by the School.<br></br><br></br>

Personal identification information

We may collect personal identification information from Students in a variety of ways, including, but not limited to, when Students enroll in the School or a Course within the School, subscribe to a newsletter, and in connection with other activities, services, features, or resources we make available in our School. Students may visit the School anonymously. We will collect personal identification information from Students only if they voluntarily submit such information to us. Students can refuse to supply personal identification information but doing so may prevent them from engaging in certain School related activities.<br></br><br></br>

How we use collected information

The School may collect and use Students’ personal identification information for the following purposes:<br></br><br></br>

 To improve customer service
Information you provide helps us respond to your customer service requests and support needs more efficiently.
 To personalize user experience
We may use information in the aggregate to understand how our Students as a group use the services and resources provided in our School.
 To send periodic emails
We may use Student email addresses to send Students information and updates pertaining to their order. Student email addresses may also be used to respond to Student inquiries, questions, or other requests.
Sharing your personal information

We do not sell, trade, or rent Student personal identification information to others.

Third party websites

Student may find advertising or other content in our School that link to the websites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these websites and are not responsible for the practices employed by websites linked to or from our School. In addition, these websites or services, including their content and links, may be constantly changing. These websites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our Student, is subject to that website's own terms and policies.

Changes to this Privacy Policy

The School has the discretion to update this Privacy Policy at any time. We encourage Students to frequently check this page for any changes. You acknowledge and agree that it is your responsibility to review this Privacy Policy periodically and become aware of modifications.

Your acceptance of these terms

By enrolling in the School, you signify your acceptance of this Privacy Policy. If you do not agree to this Privacy Policy, please do not enroll in the School. Your continued enrollment in the School following the posting of changes to this Privacy Policy will be deemed your acceptance of those changes.
                </p>
              </Col>
          </Row>
      </Container>
    </Fragment>
    )
  }
}
export default Privacy