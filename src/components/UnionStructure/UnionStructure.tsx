import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

interface UnionItem {
  title: string;
  text: string;
}

export interface UnionStructureProps {
  data: {
    title: string;
    items: UnionItem[];
  };
}

function UnionStructure(props: UnionStructureProps) {
  const { title, items } = props.data;

  return (
    <div className="container">
      <div className="unionStructure">
        {title && <h3>{title}</h3>}

        <div className="unionStructure__list">
          <div className="row">
            {items && items.map((item, i) => (
              <div key={i} className="col-12 col-md-4">
                <div className="unionStructure__list__item">
                  <h5>{item.title}</h5>
                  <ReactMarkdown
                    source={item.text}
                    className={'unionStructure__list__item__container'}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnionStructure;