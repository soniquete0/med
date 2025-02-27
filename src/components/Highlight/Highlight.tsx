import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

import Button from '../../partials/Button';

export interface HighlightProps {
  data: {
    text: string;
    description: string;
    urlTitle: string;
    url: LooseObject;
  };
  languageCode?: string;
}

const Highlight = (props: HighlightProps) => {
  const { text, url, description, urlTitle } = props.data;

  return (
    <div className={`highlight`}>
      <div className={'container'}>
        <div className={'highlight__content'}>
          <img src="/assets/medicon/images/info.png" alt="info" />

          <div>
            {text && <p>{text}</p>}
            {description && <ReactMarkdown className={'highlight__content--description'} source={description} />}
          </div>
          {url && (
            <Button classes={'btn--whiteBorder'} url={url}>
              {(urlTitle && urlTitle) || 'more info'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Highlight;
