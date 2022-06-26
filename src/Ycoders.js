import React from 'react';
import './Ycoders.css';

const Ycoders = ({coders, deleteCoder}) => {
        const coderList = coders.map(coder => {
            if (coder.age < 30) {
                return (
                    <div className='coder' key={coder.id}>
                        <div>Name: { coder.name }</div>
                        <div>Age: { coder.age }</div>
                        <div>Belt: { coder.belt }</div>
                        <button onClick={() => {deleteCoder(coder.id)}}>Delete coder</button>
                    </div>
                )
            } else {
                return null
            }
        })
        // const coderList = coders.map(coder => {
        //     return coder.age < 30 ? (
        //         <div className='coder' key={coder.id}>
        //             <div>Name: { coder.name }</div>
        //             <div>Age: { coder.age }</div>
        //             <div>Belt: { coder.belt }</div>
        //         </div>
        //     ) : null;
        // })
        return (
            <div className="coder-list">
                { coderList }
            </div>
        );
}

export default Ycoders;