import React from 'react';

const Recipe = ({title, calories, image, ingredients, healthLabels, dietLabels}) => {
    return(
        <div className="recipe-container">
            <div className="image">
            <img src={image} alt="" className="food-image"/>
            </div>
            <h1 className="food-title">{title}</h1>
            <div className="list-items">
            <p>{dietLabels[0]}</p>   
            <ul className="h-label">{healthLabels.map((item)=>{
                return (
                    <li>{item}</li>
                    
                )})}</ul>   
            <ul className="ingredients">
                <p className="style-ingred" >Ingredients :</p>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>

            <p className="style-ingred">Calories :</p>
            {Math.round(calories)}
                
            </div>
        </div>
    )
}

export default Recipe;