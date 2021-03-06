import Header from './header'
import Footer from './footer'
import React from 'react'

const Layout: React.FunctionComponent = ({ children }) => (
  <>
    <Header />
    <main id="main">{children}</main>
    <Footer />
  </>
)

export default Layout
