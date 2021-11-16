import Layout from 'components/layout'
import Seo from 'components/Seo'
import React from 'react'

const NotFoundPage = () => (
  <Layout>
    <Seo
      title='Not Found'
      description='Not Found'
    />
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <h1>NOT FOUND</h1>
          <p>Uh-oh! The page you were looking for does not exist..</p>
        </div>
      </section>
    </div>
  </Layout>
)

export default NotFoundPage
