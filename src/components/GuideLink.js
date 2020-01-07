import React from 'react'
import { Link } from 'gatsby'

const GuideLink = ({ guide }) => (
  <div>
    <Link to={guide.frontmatter.path}>
      {guide.frontmatter.title} ({guide.frontmatter.date})
    </Link>
  </div>
)

export default GuideLink
