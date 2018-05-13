import * as React from 'react';
const styles = require('./index.module.sass');

interface contentfulStartpage {
  contentfulStartpage: {
    headline: string;
    subheadline: string;
  };
}

interface contenfulAsset {
  contentfulAsset: {
    id: string;
    title: string;
    file: {
      url: string;
      fileName: string;
      contentType: string;
    };
  };
}

type contentfulData = contentfulStartpage & contenfulAsset;

interface Props {
  data: contentfulData;
}

const IndexPage: React.SFC<Props> = props => {
  const { headline, subheadline } = props.data.contentfulStartpage;
  const { url, fileName } = props.data.contentfulAsset.file;

  const inlineStyle = {
    backgroundImage: `url(${url})`,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.visual} style={inlineStyle} />
      <div className={styles.content}>
        <h1 className={styles.headline}>{headline}</h1>
        <p className={styles.subheadline}>{subheadline}</p>
      </div>
    </div>
  );
};
export default IndexPage;

export const pageQuery = graphql`
  query queryPagew {
    contentfulStartpage {
      headline
      subheadline
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
