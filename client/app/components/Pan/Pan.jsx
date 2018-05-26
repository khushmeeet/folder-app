import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Row,
} from 'reactstrap';

class Pan extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      pan: [],
    };
  }

  componentDidMount() {
    fetch('/api/pan', { method: 'GET' })
      .then(res => res.json())
      .then((jsonRes) => {
        this.setState({
          pan: jsonRes,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="policy-list">
        <Row>
          {
            this.state.pan.map(elm =>
              (
                <Col sm="6" key={elm.name}>
                  <Card className="doc-card">
                    <CardBody>
                      <CardTitle>{elm.name}</CardTitle>
                    </CardBody>
                    <a href={elm.img_src} download>
                      <img width="605px" height="501px" src={elm.img_src} alt={elm.name} />
                    </a>
                  </Card>
                </Col>
              ))
          }
        </Row>
      </div>
    );
  }
}

export default Pan;
