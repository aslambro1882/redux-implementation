import React from 'react';
import { useSelector } from 'react-redux';

const ParentTwoChild = () => {
    const count = useSelector(state => state)
    return (

        <div>
            <h1>This is from second component</h1>
            <h1>{count}</h1>

        </div>

    );
};

export default ParentTwoChild;