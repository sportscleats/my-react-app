/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from './header'
import './layout.css'
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
      allContentfulLink(sort: { fields: [createdAt], order: ASC}) {
        edges{
          node {
            title
            url
            createdAt
          }
        }
      }
    }
  `)

  return (
    <>
        <Header />
        <main>{children}</main>
        <Footer data={data}>
        © {new Date().getFullYear()}, Practice project by
          {` `}
          <a href="https://nickbable.com">Nick</a>
        </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
