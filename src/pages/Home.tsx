import React, { useEffect } from 'react';
import NameSearch from '../components/registerNameComponents/NameSearch';
import { useParams } from 'react-router-dom';
import './../App.css';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const { defaultTLN } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (defaultTLN && !defaultTLN.startsWith('@')) {
            navigate(`/@${defaultTLN}`);
        }
    }, [defaultTLN, navigate]);
    const tlnValue = defaultTLN ? defaultTLN.replace(/^@/, '') : '';

    return (
        <div className="home-content">
            <h1>Claim your free 0xNAME - Ethereum’s leading public good naming service!</h1>
            <div className="home-content-child">
                {/* Pass the handleInputChange function as a prop to the NameSearch component */}
                <NameSearch defaultTLN={tlnValue} />
            </div>
        </div>
    );
};
export default Home;
