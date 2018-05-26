import React from 'react';
import {
  Card,
  CardBody,
  CardLink,
  CardTitle,
  Col,
  Row,
} from 'reactstrap';


class Aadhar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      aadhar: [],
    };
  }

  componentDidMount() {
    fetch('/api/aadhar', { method: 'GET' })
      .then(res => res.json())
      .then((jsonRes) => {
        this.setState({
          aadhar: jsonRes,
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
          this.state.aadhar.map(elm =>
          (
            <Row key={elm.name}>
              <Col sm="6">
                <Card>
                  <CardBody>
                    <CardTitle>{elm.name}</CardTitle>
                  </CardBody>
                  <img width="100%" src={elm.img_src} alt={elm.name} />
                  <CardBody>
                    <CardLink href="#">Download</CardLink>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="6">
                <Card>
                  <CardBody>
                    <CardTitle>{elm.name}</CardTitle>
                  </CardBody>
                  <img width="100%" src={elm.img_src} alt={elm.name} />
                  <CardBody>
                    <CardLink href="#">Download</CardLink>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          ))
        }
      </div>
    );
  }
}


export default Aadhar;
