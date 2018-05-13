import * as React from 'react';

class TestComponent extends React.Component<any, {}> {
  public componentDidMount() {}
  public render() {
    const { slug } = this.props.data.contentfulProduct;
    const { url } = this.props.data.contentfulAsset.file;
    return (
      <div>
        {slug}
        <img src={url} alt="" />
      </div>
    );
  }
}

export default TestComponent;

export const pageQuery = graphql`
  query queryPage($slug: String) {
    contentfulProduct(slug: { eq: $slug }) {
      id
      slug
    }
    contentfulAsset {
      id
      title
      file {
        url
        fileName
        contentType
      }
    }
  }
`;
