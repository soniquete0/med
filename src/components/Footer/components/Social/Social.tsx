import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

import Link from '../../../../partials/Link';
import SvgIcon from '../../../../partials/SvgIcon';

const Social = (props: any) => {
  const { icons, info } = props;

  return (
    <div className="social flexColumn">
      {icons &&
        icons.map((icon, i) => (
          <Link {...icon.url} key={i}>
            <SvgIcon type={'white'} name={icon.name} />
          </Link>
        ))}

      {info && <ReactMarkdown className={'social__text'} source={info} />}
    </div>
  );
};

export default Social;
