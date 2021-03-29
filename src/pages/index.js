import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Posts from '../components/Posts';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
// ...GatsbyImageSharpFluid
const IndexPage = ({ data }) => {
  console.log(data);
  const {
    allStrapiBlogs: { nodes: posts },
  } = data;
  return (
    <>
      <Layout>
        <Hero showPerson />
        <Posts title="recent posts" posts={posts}></Posts>
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    allStrapiBlogs(limit: 3) {
      nodes {
        id
        title
        slug
        date(formatString: "MMMM Do, YYYY")
        category
        description
        image {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              layout: FULL_WIDTH
            )
          }
        }
      }
    }
  }
`;
export default IndexPage;
