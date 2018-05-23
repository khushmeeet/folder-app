import React, { Fragment } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputGroupAddon,
  Input,
} from 'reactstrap';


class NewPolicy extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      person_name: '',
      policy_name: '',
      policy_no: '',
      doc: '',
      dom: '',
      dlp: '',
      pp: '',
    };

    this.toggle = this.toggle.bind(this);
    this.addPolicy = this.addPolicy.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  addPolicy() {
    const {
      modal,
      person_name,
      policy_name,
      policy_no,
      doc,
      dom,
      dlp,
      pp,
    } = this.state;

    this.toggle();

    fetch('/api/policy/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({
        policy_name: policy_name,
        person_name: person_name,
        policy_no: policy_no,
        date_of_commencement: doc,
        date_of_maturity: dom,
        date_of_last_payment: dlp,
        premium_payable: pp,
      }),
    })
      .then(res => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Fragment>
        <Button color="danger" onClick={this.toggle} className="new-policy" >Add Policy</Button>
        <form onSubmit={this.addPolicy}>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className="new-policy-modal">
            <ModalHeader toggle={this.toggle}>Add New Policy</ModalHeader>
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
        </form>
      </Fragment>
    );
  }
}

export default NewPolicy;
