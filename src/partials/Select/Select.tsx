import * as React from 'react';

interface SelectProps {
  className: string;
  items: Array<string>;
  value: string | number;
  defaultValue: string | number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface SelectState {
  items: Array<string>;
  isItemsAlreadyChanged: boolean;
}

class Select extends React.Component<SelectProps, SelectState> {
  constructor(props: SelectProps) {
    super(props);

    this.state = {
      isItemsAlreadyChanged: false,
      items: []
    };
  }

  componentDidMount() {
    // will be executed only once
    if (!this.state.isItemsAlreadyChanged) {
      setTimeout(() => this.setState({
        items: this.props.items,
        isItemsAlreadyChanged: true
      }),        1000);
    }
  }

  render () {
    const { items } = this.state;
    const { onChange, className, value, defaultValue } = this.props;

    return (
      <div className={`selectBtn ${className}`}>
        <select value={value} onChange={onChange}>
          <option value={''}>{defaultValue}</option>
          {items && items.map((item, idx) => <option key={idx} value={item}>{item}</option>)}
        </select>
        
        <span className="arrow" />
      </div>
    );
  }
}

export default Select;