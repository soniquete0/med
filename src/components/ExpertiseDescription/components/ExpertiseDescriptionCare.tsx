import * as React from 'react';
import ReactMarkdown from 'react-markdown';

export interface ExpertiseDescriptionCareProps {
  title: string;
  firstText: string;
  secondText: string;
}

export interface ExpertiseDescriptionCareState {
  showHiddenText: boolean;
}

// tslint:disable-next-line:max-line-length
export default class ExpertiseDescriptionCare extends React.Component<ExpertiseDescriptionCareProps, ExpertiseDescriptionCareState> {
  constructor(props: ExpertiseDescriptionCareProps) {
    super(props);

    this.state = {
      showHiddenText: false,
    };
  }

  render() {
    return (
      <div className={'care'}>
        {this.props.title && <h3>{this.props.title}</h3>}
        <div className={'hCenterBlock'}>
          {this.props.firstText && <ReactMarkdown source={this.props.firstText} />}
        </div>
        {this.props.secondText && this.props.secondText.length > 1 && 
          <h4 
            style={{ cursor: 'pointer', padding: '45px 0 0 0' }} 
            onClick={() => this.setState({ showHiddenText: !this.state.showHiddenText })}
          >
            Více informací
          </h4>
        }
        
        {this.state.showHiddenText ? 
          <div className={'hCenterBlock'}>
            {this.props.secondText && <ReactMarkdown source={this.props.secondText} />}
          </div>
          : ''
        }
      </div>
    );
  }
}