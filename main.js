//Create the Main Application 
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

//Portfolio value
const totalPortfolioValue = calculatePortfolioValue();
console.log('Total Portfolio Value:', totalPortfolioValue);

//Portfolio allocation
const allocations = getPortfolioAllocation();
console.log('Portfolio Allocation:');
allocations.forEach(allocation => {
  console.log(`${allocation.name}: ${allocation.allocation.toFixed(2)}%`);
});

//Transactions
console.log('--- Performing Transactions ---');
try {
  new Transaction(1, 'buy', 50);  
  new Transaction(2, 'sell', 40); 
  new Transaction(4, 'buy', 30); 
} catch (error) {
  console.error(error.message);
}

//Updated portfolio value after transactions
const updatedPortfolioValue = calculatePortfolioValue();
console.log('Updated Portfolio Value:', updatedPortfolioValue);

//Updated portfolio allocation after transactions
const updatedAllocations = getPortfolioAllocation();
console.log('Updated Portfolio Allocation:');
updatedAllocations.forEach(allocation => {
  console.log(`${allocation.name}: ${allocation.allocation.toFixed(2)}%`);
});