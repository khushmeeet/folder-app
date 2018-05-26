import React from 'react';


class Passport extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      img_src: '',
    };
  }

  render() {
    return (
      <h1>Passport</h1>
    );
  }
}


export default Passport;
