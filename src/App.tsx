import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/layoutComponents/Header';
import PageContent from './components/layoutComponents/Page';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import RegisterTLN from './pages/CreateCommunity';
import RegisterTLNFinal from './pages/CreateCommunityFinal';
import RegisterNameFinal from './pages/RegisterNameFinal';
import ManageTLNFinal from './pages/ManageCommunityFinal';
import MyTLNs from './pages/MyCommunities';
import MyCards from './pages/MyCards';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS here
import config from './config';
import { WagmiProvider } from 'wagmi';
import { ConnectKitProvider } from 'connectkit';
import MyCustomAvatar from './components/connectKit/MyCustomAvatar';
import CommunityBase from './pages/CommunityBase';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useLoadFrames } from './hooks';

type PageKey =
    | '🗂️ COMMUNITY BASE'
    | 'MY NAMES'
    | '🌈 REGISTER TLN'
    | 'MY TLNs'
    | 'ABOUT'
    | 'Download Snap';

const App: React.FunctionComponent = () => {
    const { isSDKLoaded } = useLoadFrames();

    if (!isSDKLoaded) {
        return <div>Loading...</div>;
    }
    const pages: PageKey[] = [
        '🗂️ COMMUNITY BASE',
        'MY NAMES',
        '🌈 REGISTER TLN',
        'MY TLNs',
        'ABOUT',
        'Download Snap',
    ];
    const queryClient = new QueryClient();
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <ConnectKitProvider
                    theme="nouns"
                    options={{
                        customAvatar: MyCustomAvatar,
                        hideBalance: false,
                    }}
                >
                    <Router>
                        <div className="App">
                            <Header pages={pages} />
                            <div className="content-container">
                                <Routes>
                                    <Route
                                        path="/"
                                        element={
                                            <PageContent>
                                                {' '}
                                                <Home />{' '}
                                            </PageContent>
                                        }
                                    />
                                    <Route
                                        path="/:defaultTLN"
                                        element={
                                            <PageContent>
                                                {' '}
                                                <Home />{' '}
                                            </PageContent>
                                        }
                                    />
                                    <Route
                                        path="/n/:nameAtTLN"
                                        element={
                                            <PageContent>
                                                {' '}
                                                <Profile />{' '}
                                            </PageContent>
                                        }
                                    />
                                    <Route
                                        path="/communitybase"
                                        element={
                                            <PageContent>
                                                {' '}
                                                <CommunityBase />{' '}
                                            </PageContent>
                                        }
                                    />
                                    <Route
                                        path="/n/"
                                        element={
                                            <PageContent>
                                                {' '}
                                                <MyCards />{' '}
                                            </PageContent>
                                        }
                                    />
                                    <Route
                                        path="/RegisterTLN"
                                        element={
                                            <PageContent>
                                                {' '}
                                                <RegisterTLN />{' '}
                                            </PageContent>
                                        }
                                    />
                                    <Route
                                        path="/t/"
                                        element={
                                            <PageContent>
                                                {' '}
                                                <MyTLNs />{' '}
                                            </PageContent>
                                        }
                                    />
                                    <Route
                                        path="/about"
                                        element={
                                            <PageContent>
                                                {' '}
                                                <About />{' '}
                                            </PageContent>
                                        }
                                    />
                                    <Route
                                        path="/RegisterTLNFinal/:searchValue"
                                        element={
                                            <PageContent>
                                                {' '}
                                                <RegisterTLNFinal />{' '}
                                            </PageContent>
                                        }
                                    />
                                    <Route
                                        path="/RegisterTLNFinal/"
                                        element={
                                            <PageContent>
                                                {' '}
                                                <RegisterTLNFinal />{' '}
                                            </PageContent>
                                        }
                                    />
                                    <Route
                                        path="/RegisterNameFinal/:nameAtTLN"
                                        element={
                                            <PageContent>
                                                {' '}
                                                <RegisterNameFinal />{' '}
                                            </PageContent>
                                        }
                                    />
                                    <Route
                                        path="/t/:searchValueTLN"
                                        element={
                                            <PageContent>
                                                {' '}
                                                <ManageTLNFinal />{' '}
                                            </PageContent>
                                        }
                                    />
                                </Routes>
                            </div>
                        </div>
                    </Router>
                </ConnectKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
};

export default App;
