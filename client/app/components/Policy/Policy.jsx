import React, { Fragment } from 'react';
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Col,
  Row,
} from 'reactstrap';
import numeral from 'numeral';
import moment from 'moment';
import NewPolicy from '../NewPolicy/NewPolicy';


class Policy extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      policy: [],
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    fetch('/api/policy', { method: 'GET' })
      .then(res => res.json())
      .then((jsonRes) => {
        this.setState({
          policy: jsonRes,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <Fragment>
        <div>
          <NewPolicy />
        </div>
        <div className="policy-list">
          {
          this.state.policy.map(elm =>
            (
              <Row>
                <Col sm="3" />
                <Col sm="6">
                  <Card body className="policy-card" key={elm.policy_no}>
                    <CardTitle>{elm.policy_name}</CardTitle>
                    <CardText>
                      <span>
                        <strong>Person Name: </strong>{elm.person_name}
                      </span>
                      <br />
                      <span>
                        <strong>Policy Number: </strong>{elm.policy_no}
                      </span>
                      <br />
                      <span>
                        <strong>Date of Commencement: </strong>{moment(elm.date_of_commencement).format('MMMM Do YYYY')}
                      </span>
                      <br />
                      <span>
                        <strong>Date of Maturity: </strong>{moment(elm.date_of_maturity).format('MMMM Do YYYY')}
                      </span>
                      <br />
                      <span>
                        <strong>Date of Last Payment: </strong>{moment(elm.date_of_last_payment).format('MMMM Do YYYY')}
                      </span>
                      <br />
                      <span>
                        <strong>Premium Payable: </strong>{`₹${numeral(elm.premium_payable).format('0,0')}/month`}
                      </span>
                    </CardText>
                    <Fragment>
                      <Button color="danger" onClick={this.toggle} className="new-policy" >Edit</Button>
                      {/* <form onSubmit={this.addPolicy}>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className="new-policy-modal">
                          <ModalHeader toggle={this.toggle}>Edit Policy</ModalHeader>
                          <ModalBody>
                            <div>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">Policy</InputGroupAddon>
                                <Input placeholder="Policy Name" name="policy_name" value={this.state.policy_name} onChange={this.handleChange} />
                              </InputGroup>
                              <br />
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">Person</InputGroupAddon>
                                <Input placeholder="Person Name" name="person_name" value={this.state.person_name} onChange={this.handleChange} />
                              </InputGroup>
                              <br />
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">123</InputGroupAddon>
                                <Input placeholder="Policy Number" type="number" name="policy_no" value={this.state.policy_no} onChange={this.handleChange} />
                              </InputGroup>
                              <br />
                              <InputGroup>
                                <InputGroupAddon addonType="append">Date</InputGroupAddon>
                                <Input placeholder="Date of Commencement" type="date" name="doc" value={this.state.doc} onChange={this.handleChange} />
                              </InputGroup>
                              <br />
                              <InputGroup>
                                <InputGroupAddon addonType="append">Date</InputGroupAddon>
                                <Input placeholder="Date of Maturity" type="date" name="dom" value={this.state.dom} onChange={this.handleChange} />
                              </InputGroup>
                              <br />
                              <InputGroup>
                                <InputGroupAddon addonType="append">Date</InputGroupAddon>
                                <Input placeholder="Date of Last Payable" type="date" name="dlp" value={this.state.dlp} onChange={this.handleChange} />
                              </InputGroup>
                              <br />
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">₹</InputGroupAddon>
                                <Input placeholder="Premium Payable/month" type="number" name="pp" value={this.state.pp} onChange={this.handleChange} />
                              </InputGroup>
                            </div>
                          </ModalBody>
                          <ModalFooter>
                            <Button color="primary" onClick={this.addPolicy}>Add</Button>
                          </ModalFooter>
                        </Modal>
                      </form> */}
                    </Fragment>
                  </Card>
                </Col>
                <Col sm="3" />
              </Row>
            ))
          }
        </div>
      </Fragment>
    );
  }
}


export default Policy;
