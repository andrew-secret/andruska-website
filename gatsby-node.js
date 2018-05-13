const path = require(`path`);

exports.createPages = ({
  graphql,
  boundActionCreators
}) => {
  const {
    createPage
  } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const testTemplate = path.resolve('src/hallo.tsx');
    resolve(
      graphql(`
        {
          allContentfulProduct(limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulProduct.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: testTemplate,
            context: {
              slug: edge.node.slug,
            },
          });
        });
        return;
      })
    );
  });
};