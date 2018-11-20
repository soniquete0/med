import * as React from 'react';

interface IProperties {
  data: {
    text: string;
  };
}

class AlertNotFound extends React.Component<IProperties, {}> {
  render() {
    return <div className={'dummy'}>{this.props.data.text || ''}</div>;
  }
}

export default AlertNotFound;
