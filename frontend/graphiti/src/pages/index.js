import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    
    <h1>A protocol for making AI art without using Google Colab</h1>
    <p>Now go build something great.</p>
    <p>
      <Link to="/page-2/">Try it out</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
