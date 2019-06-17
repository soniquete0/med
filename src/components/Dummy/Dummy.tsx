import * as React from 'react';

interface DummyProps {
  data: {
    marginTop: string;
    marginBottom: string;
  };
}

export default function Dummy(props: DummyProps) {
  const { marginTop, marginBottom } = props.data;

  console.log(props.data);
  return (
    <div 
      className="dividerCircles"
      style={{
        marginTop: parseInt(marginTop, 10) > 0 ? parseInt(marginTop, 10) : 0,
        marginBottom: parseInt(marginBottom, 10) > 0 ? parseInt(marginBottom, 10) : 0
      }}
    >
      <div />
    </div>
  );
}