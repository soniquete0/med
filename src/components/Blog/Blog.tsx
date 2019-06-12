import * as React from 'react';
import Masonry from 'react-masonry-css';
import * as ReactMarkdown from 'react-markdown';

import List from '../List';
import SearchBar from './components/searchBar';
import { BlogCard } from './components/blogCard';

export interface BlogProps {
  languageCode?: string;
  data: {
    articles: any;
    title: string;
    specialText: string;
    specialTitle: string;
    displaySearch: boolean;
  };
}

export interface BlogState {
  numberOfPage: number;
  searchQuery: string;
}

export default class Blog extends React.Component<BlogProps, BlogState> {
  constructor(props: BlogProps) {
    super(props);

    this.state = {
      numberOfPage: 1,
      searchQuery: ''
    };
  }

  onSearchChange = (e: any) => {
    this.setState({ searchQuery: e.target.value });
  }

  public render() {
    const {
      title,
      articles,
      specialText,
      specialTitle,
      displaySearch
    } = this.props.data;

    return (
      <section className={'blog'}>
        <div className="container">
          {title && <h1 style={displaySearch ? { paddingBottom: 0 } : {}}>{title}</h1>}

          {displaySearch &&
            <SearchBar
              barColor={'gray'}
              placeholder={'Search'}
              value={this.state.searchQuery}
              onChange={this.onSearchChange}
            />}

          <List data={articles} searchedText={this.state.searchQuery}>
            {({ getPage }) => {
              const { items, lastPage } = getPage(this.state.numberOfPage, 'infinite', 6);

              if (items && items.length <= 0) {
                return <div className={'searchBarResults__noResults'}>Bohužel nebyl nalezen žádný článek.</div>;
              }
              
              return (
                <>
                  <Masonry
                    breakpointCols={{ default: 3, 4000: 3, 800: 2, 500: 1 }}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {items.map((article, i) => {

                      if (i === 1 && specialText && specialTitle) {
                        return (
                          <div key={'special'} className={'blogCard blogCard--special'}>
                            <h3>{specialTitle}</h3>
                            <ReactMarkdown
                              source={specialText}
                              renderers={{
                                // tslint:disable-next-line:no-any
                                paragraph: (rProps: any) => <p>{rProps.children}</p>,
                              }}
                            />
                          </div>
                        );
                      }

                      return (
                        <BlogCard
                          key={i}
                          url={article.url}
                          text={article.text}
                          img={article.image}
                          title={article.title}
                          color={
                            article.color 
                            && article.color.trim().length > 0 
                            ? article.color : '#386fa2'
                          }
                        />);
                    })}
                  </Masonry>

                  {this.state.numberOfPage < lastPage &&
                    <button
                      style={{ margin: '0 auto' }}
                      className={'btn btn--blueBkg btn--fullWidth'}
                      onClick={() => this.setState({ numberOfPage: this.state.numberOfPage + 1 })}
                    >
                      Načíst další
                    </button>}
                </>
              );
            }}
          </List>
        </div>
      </section>
    );
  }
}