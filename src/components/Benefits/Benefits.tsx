import * as React from 'react';

interface IProperties {
  data: number[];
}

// const listItems = this.props.data.map((item) => 
//   <li><p>{item}</p></li>
// );

const Benefits: React.SFC<IProperties> = props => (
  <div className={'benefity'}>
    <ul>
      <li><p>Přívětivý personál</p></li>
      <li><p>Přívětivý personál</p></li>
      <li><p>Přívětivý personál</p></li>
      <li><p>Přívětivý personál</p></li>
    </ul>
  </div>
);

export default Benefits;