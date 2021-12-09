import React from 'react'

const StarsRating = ({rating,handleRating}) => {
    function ratingStars(x) {
        let star =[];
        for (let i = 1 ; i <= 5; i++) {
            if (i<=x) {
                star.push(
                    <span onClick={()=>handleRating(i) } style={{color:'gold',fontSize:'20px',cursor:'pointer'}}>★</span>
                )}
            else 
                star.push(
                    <span onClick={()=>handleRating(i) } style={{color:'black',fontSize:'20px',cursor:'pointer'}}>★</span>
                )
            
            }
            return(star)
        }
    
    return (
        <div>
            {ratingStars(rating)}
        </div>
    )
}

StarsRating.defaultProps={
    handleRating:()=>{}
}

export default StarsRating
