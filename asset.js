//Create the Asset Module 
const assets = [
    { id: 1, name: 'Carnival Stock', type: 'stock', price: 1000, quantity: 100 },
    { id: 2, name: 'Disney Stock', type: 'stock', price: 900, quantity: 90 },
    { id: 3, name: 'Treasury Bond', type: 'bond', price: 800, quantity: 80 },
    { id: 4, name: 'Insurance Bond', type: 'bond', price: 700, quantity: 70 }
  ];
  
  // Function to get asset by id
  function getAssetById(id) {
    return assets.find(asset => asset.id === id);
  }
  
  export { assets, getAssetById };