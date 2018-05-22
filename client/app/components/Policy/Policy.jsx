import React from 'react';
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Col,
  Row,
} from 'reactstrap';


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
                        <strong>Date of Commencement: </strong>{elm.date_of_commencement}
                      </span>
                      <br />
                      <span>
                        <strong>Date of Maturity: </strong>{elm.date_of_maturity}
                      </span>
                      <br />
                      <span>
                        <strong>Date of Last Payment: </strong>{elm.date_of_last_payment}
                      </span>
                      <br />
                      <span>
                        <strong>Premium Payable: </strong>{elm.premium_payable}
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
