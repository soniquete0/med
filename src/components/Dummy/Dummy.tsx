import * as React from 'react';

interface IProperties {
  data: {
    text: string;
  };
}

class Dummy extends React.Component<IProperties, {}> {
  render() {
    return (
      <div className={'container'}>
        <div className={'dummy'}>{this.props.data.text || ''}</div>
      </div>
    );
  }
}

export default Dummy;
