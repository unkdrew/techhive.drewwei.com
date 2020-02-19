import backgroundGadgets from 'assets/images/background_gadgets.jpg'
import backgroundGuides from 'assets/images/background_guides.jpg'
import backgroundSmartHome from 'assets/images/background_smart_home.jpg'
import Banner from 'components/Banner'
import Layout from 'components/layout'
import SEO from 'components/SEO'
import { Link } from 'gatsby'
import React from 'react'
import config from 'root/config'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title={config.siteTitle}
          description="Drew Wei's Personal Tech Blog"
        />

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{backgroundImage: `url(${backgroundGuides})`}}>
              <header className="major">
                <h3>Guides</h3>
                <p>Coding, etc.</p>
              </header>
              <Link to="/guides" className="link primary"></Link>
            </article>
            <article style={{backgroundImage: `url(${backgroundGadgets})`}}>
              <header className="major">
                <h3>Gadgets</h3>
                <p>Coming soon..</p>
              </header>
              <Link to="/#" className="link primary"></Link>
            </article>
            <article style={{backgroundImage: `url(${backgroundSmartHome})`}}>
              <header className="major">
                <h3>Smart Home</h3>
                <p>Coming soon..</p>
              </header>
              <Link to="/#" className="link primary"></Link>
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Wanna check out some more?</h2>
              </header>
              <ul className="actions">
                <li><a href="https://drewwei.com" className="button next">Go to drewwei.com</a></li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
