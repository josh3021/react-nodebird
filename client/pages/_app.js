import App from "next/app";
import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";
import AppLayout from "../components/AppLayout";
import wrapper from "../store";

class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props;
    return (
      <>
        <Head>
          <title> NodeBird </title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.2.2/antd.compact.min.css"
          />
        </Head>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </>
    );
  }
}

MyApp.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.object,
};

export default wrapper.withRedux(MyApp);
