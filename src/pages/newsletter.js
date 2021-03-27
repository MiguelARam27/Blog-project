import React from 'react';
import Layout from '../components/Layout';
const NewsLetter = () => {
  return (
    <Layout>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Get all my latest stories to your inbox</h2>
          <h4>I write to my friends every weeks</h4>
          <form
            className="contact-form"
            name="news"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/success"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="news" />
            <input
              type="text"
              name="name"
              placeholder="your name"
              className="form-control"
            />
            <input
              type="type"
              name="email"
              placeholder="your name"
              className="form-control"
            />
            <button type="submit" className="btn form-control">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default NewsLetter;
