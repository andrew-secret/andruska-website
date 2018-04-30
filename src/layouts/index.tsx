import * as React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Contact } from './Contact/Contact';
import './index.scss';

interface Props {
  children?: () => React.ReactNode;
  typography?: any;
}

const TemplateWrapper: React.SFC<Props> = ({ children }) => (
  <div>
    <Helmet
      title="Andruska - pixel und papier"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div>{children()}</div>
    <Contact />
    <Footer />
  </div>
);

export default TemplateWrapper;
