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
const IndexPage = () => {
  return (
    <>
      <Layout></Layout>
    </>
  );
};

export default IndexPage;
