import React from "react";
import App from "next/app";
import Page from "../components/Page";
import "antd/dist/antd.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Page>
          <Component {...pageProps} />
        </Page>
      </React.Fragment>
    );
  }
}

export default MyApp;
