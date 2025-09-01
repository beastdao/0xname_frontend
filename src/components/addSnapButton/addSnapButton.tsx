import React from 'react';
import { Link } from 'react-router-dom';

const AddSnapButton = ({ label = 'Use 0xNAME in MetaMask' }: { label?: string }) => {
    return (
        <Link
            to="https://snaps.metamask.io/snap/npm/0xname-resolver-snap/"
            target="_blank"
            className="snapBtn"
        >
            <img src="/fox.svg" alt="metamask svg" width={24} height={24} />
            <p>{label}</p>
        </Link>
    );
};

export default AddSnapButton;
