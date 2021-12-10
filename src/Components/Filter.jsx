import StarsRating from './StarsRating'

const Filter = ({text,handleChange,rating,handleRating}) => {


    return (
        <div style={{display:'flex'}}>
            <input type="text" value={text} onChange={handleChange} />
            <StarsRating rating={rating} handleRating={handleRating}/>
        </div>
    )
}

export default Filter
