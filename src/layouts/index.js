import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Navigation from './Navigation/Navigation'
import { TypographyStyle, GoogleFont } from 'react-typography';
import typography from '../utils/typography';
import './index.scss'


const TemplateWrapper = ({ children }) => (
  <div>
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
