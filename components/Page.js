import React from "react";
import Meta from "./Meta";
import Header from "./Header";
import SideMenu from "./SideMenu";
import { Layout } from "antd";

const Page = (props) => {
  return (
    <>
      <Meta />
      <Layout>
        <Layout.Sider style={{ height: "100vh" }}>
          <SideMenu />
        </Layout.Sider>
        <Layout>
          <Layout.Header style={{ background: "#fff" }}>
            <Header />
          </Layout.Header>
          <Layout.Content>{props.children}</Layout.Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Page;
