import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { increaseCounter } from '../../../redux/actions/countAction';

const ParentOneChild = () => {
    const count = useSelector((state) => state)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>This is from First component</h1>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increaseCounter())}>increase</button>
        </div>
    );
};

export default ParentOneChild;