import React from 'react';

const Rank = ({ name, entries }) => {
    return(
        <div style={{textAlign: 'center'}}>
            <div className='white f3'>
                {`${name} , your image entries count is...`}
            </div>
            <div className='white f1'>
                {entries}
            </div>
        </div>
    )
}

export default Rank;