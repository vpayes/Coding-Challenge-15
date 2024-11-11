//Create thr portfolio module
import { assets } from './asset.js';

//Calculate total portfolio value
function calculatePortfolioValue() {
  return assets.reduce((total, asset) => total + (asset.price * asset.quantity), 0);
}

//Calculate portfolio allocation percentages
function getPortfolioAllocation() {
  const totalValue = calculatePortfolioValue();
  return assets.map(asset => ({
    name: asset.name,
    allocation: ((asset.price * asset.quantity) / totalValue) * 100
  }));
}

export { calculatePortfolioValue, getPortfolioAllocation };
