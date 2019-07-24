import * as React from 'react';

import List from '../../../List';
import Link from '../../../../partials/Link';

interface BlogSearchResultsProps {
  query: string;
  searchResults?: LooseObject;
  searchKeys?: Array<string>;
  checkBlogResults: Function;
}

// tslint:disable-next-line:max-line-length
export default function BlogSearchResults({ searchResults, query, searchKeys, checkBlogResults }: BlogSearchResultsProps) {
  return (
    <List
      data={searchResults}
      searchedText={query}
      searchKeys={searchKeys}
    >
      {({ data }) => {
        if (data.length > 0) {
          checkBlogResults(data.length);

          return (
            <ul className={'searchBarResults__blog'}>
              {data.map((blogItem, i) => (
                <li key={i}>
                  <Link {...blogItem.link}>
                    <div>
                      <h4>{blogItem.name || blogItem.title}</h4>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          );
        } else {
          checkBlogResults(null);
          return (<></>);
        }
      }}
    </List>
  );
}