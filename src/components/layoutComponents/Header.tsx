import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../images/logo_card_tb.png';
import { ConnectButton } from '../connectKit/ConnectButton';
import { Link } from 'react-router-dom';

const pagePaths = {
    '🗂️ COMMUNITY BASE': { path: '/communitybase', external: false },
    'MY NAMES': { path: '/n/', external: false },
    '🌈 REGISTER TLN': { path: '/registertln', external: false },
    'MY TLNs': { path: '/t/', external: false },
    ABOUT: { path: '/about', external: false },
    'Download Snap': {
        path: 'https://snaps.metamask.io/snap/npm/0xname-resolver-snap/',
        external: true,
    },
};

const NavItemLink = ({
    label,
    pageInfo,
}: {
    label: string;
    pageInfo: { path: string; external: boolean };
}) => {
    if (pageInfo.external) {
        return (
            <Nav.Item>
                <Nav.Link href={pageInfo.path} target="_blank" rel="noopener noreferrer">
                    {label}
                    <img src="/fox.svg" alt="metamask svg" width={24} height={24} />
                </Nav.Link>
            </Nav.Item>
        );
    }

    return (
        <Nav.Item>
            <Nav.Link as={Link} to={pageInfo.path}>
                {label}
            </Nav.Link>
        </Nav.Item>
    );
};

const Header = ({ pages }: { pages: (keyof typeof pagePaths)[] }) => (
    <Navbar expand="xl" className="bg-body-tertiary" collapseOnSelect>
        <Container>
            <Navbar.Brand as={Link} to="/">
                <img src={logo} alt="0xNAME logo" height="30vh" />
                0xNAME
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    {pages.map((page, index) => (
                        <NavItemLink key={index} label={page} pageInfo={pagePaths[page]} />
                    ))}
                </Nav>
                <ConnectButton />
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Header;
