import React from 'react';

import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider, Layout, theme } from 'antd';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import LayoutFooter from './components/LayoutFooter/LayoutFooter';
import LayoutHeader from './components/LayoutHeader/LayoutHeader';
import { MENU_HEADER_URL } from './constants/constants';
import MarketPlacePage from './pages/MarketPlacePage/MarketPlacePage';
import { store } from './store/store';

const { Content } = Layout;
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
              Tooltip: {
                colorBgSpotlight: 'transparent',
              },
              Slider: {
                handleActiveColor: 'white',
              },
              Select: {
                singleItemHeightLG: 44,
              },
            },
          }}
        >
          <Layout>
            <LayoutHeader />

            <Content>
              <Routes>
                <Route path="/" element={<MarketPlacePage />} />
                <Route path={MENU_HEADER_URL.Home} element={<MarketPlacePage />} />
                <Route path={MENU_HEADER_URL.AboutUs} />
                <Route path={MENU_HEADER_URL.OurTeams} />
                <Route path={MENU_HEADER_URL.MarketplaceRoadmap} element={<MarketPlacePage />} />
                <Route path={MENU_HEADER_URL.WhitePaper} />
              </Routes>
            </Content>

            <LayoutFooter />
          </Layout>
        </ConfigProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
