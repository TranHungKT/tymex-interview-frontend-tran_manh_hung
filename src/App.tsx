import React from 'react';

import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider, Layout, theme } from 'antd';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import LayoutHeader from './components/LayoutHeader/Header';
import MarketPlacePage from './pages/MarketPlacePage/MarketPlacePage';
import { store } from './store/store';

const { Content, Footer } = Layout;
const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
            token: {
              fontFamily: 'inter',
            },
            components: {
              Button: {
                colorPrimary:
                  'linear-gradient(90deg, rgba(218,69,143,1) 100%, rgba(218,52,221,1) 100%)',
                colorPrimaryActive:
                  'linear-gradient(90deg, rgba(218,69,143,1) 100%, rgba(218,52,221,1) 11000%)',
                colorPrimaryHover:
                  'linear-gradient(90deg, rgba(218,69,143,1) 100%, rgba(218,52,221,1) 100%)',

                lineWidth: 0,
                fontSize: 16,
                paddingBlock: 22,
                paddingInline: 16,
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
                <Route path="our-teams" element={<MarketPlacePage />} />
                <Route path="marketplace-roadmap" element={<MarketPlacePage />} />
                <Route path="white-paper" element={<MarketPlacePage />} />
              </Routes>
            </Content>
            <Footer />
          </Layout>
        </ConfigProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
