import React from 'react';
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


class Policy extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      policy: [],
    };
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

  render() {
    return (
      <div className="policy-list">
        {
          this.state.policy.map(elm =>
            (
              <Row>
                <Col sm="3" />
                <Col sm="6">
                  <Card body className="policy-card" key={elm.policy_no.toString()}>
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
                    <Button color="primary">Edit</Button>
                  </Card>
                </Col>
                <Col sm="3" />
              </Row>
            ))
        }
      </div>
    );
  }
}


export default Policy;
