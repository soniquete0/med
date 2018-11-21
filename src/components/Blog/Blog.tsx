import * as React from 'react';

export interface BlogProps {}

export interface BlogState {}

export default class Blog extends React.Component<BlogProps, BlogState> {
  constructor(props: BlogProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div>blog</div>;
  }
}
