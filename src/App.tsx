import React from 'react';

import './App.css';

import { ConfigProvider, Layout, theme } from 'antd';
import { Route, Routes } from 'react-router-dom';

import LayoutHeader from './components/LayoutHeader/Header';
import MarketPlacePage from './pages/MarketPlacePage/MarketPlacePage';

const { Content, Footer } = Layout;

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            fontFamily: 'drone',
          },
          components: {
            Button: {
              colorPrimary:
                'linear-gradient(90deg, rgba(218,69,143,1) 0%, rgba(218,52,221,1) 100%)',
              colorPrimaryActive:
                'linear-gradient(90deg, rgba(218,69,143,1) 0%, rgba(218,52,221,1) 100%)',
              colorPrimaryHover:
                'linear-gradient(90deg, rgba(218,69,143,1) 0%, rgba(218,52,221,1) 100%)',
              lineWidth: 0,
            },
          },
        }}
      >
        <Layout>
          <LayoutHeader />

          <Content>
            <Routes>
              <Route path="home" element={<MarketPlacePage />} />
              <Route path="about-us" element={<MarketPlacePage />} />
              <Route path="marketplace-roadmap" element={<MarketPlacePage />} />
              <Route path="white-paper" element={<MarketPlacePage />} />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </ConfigProvider>
    </>
  );
}

export default App;
