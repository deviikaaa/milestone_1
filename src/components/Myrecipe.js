import React from 'react';

function MyRecipe() {
  const foodItems = [
    { id: 1, name: 'Food Item 1', price: '$10', imageUrl: 'food1.jpg' },
    { id: 2, name: 'Food Item 2', price: '$12', imageUrl: 'food2.jpg' },
    // Add more food items as needed
  ];

  return (
    <div className="container">
      <h1>My Recipe</h1>
      <div className="row">
        {foodItems.map((item) => (
          <div className="col-md-4" key={item.id}>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyRecipe;
