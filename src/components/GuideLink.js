import { Link } from 'gatsby'
import React from 'react'

const GuideLink = ({ guide }) => (
  <div>
    <Link to={guide.frontmatter.path}>
      {guide.frontmatter.title} --- {guide.frontmatter.date}
    </Link>
  </div>
)

export default GuideLink
