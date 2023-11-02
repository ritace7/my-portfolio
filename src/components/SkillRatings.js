import React from 'react';

const SkillRatings = ({rating}) => {
    return ( 
        <div className="skill-rating">
            {(() => {
                let num = [];
                for(let i=0; i<10; i++){
                    i<rating?num.push(<div className="circle-container skilled"></div>):num.push(<div className="circle-container normal"></div>);
                }
                return num;
            })()}
        </div> 
    );
}
 
export default SkillRatings;