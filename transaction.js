//Create the Transaction Module
import { getAssetById } from './asset.js';

class Transaction {
  constructor(assetId, type, quantity) {
    this.assetId = assetId;
    this.type = type;
    this.quantity = quantity;

    const asset = getAssetById(assetId);
    if (type === 'buy') {
      this.executeBuy(asset);
    } else if (type === 'sell') {
      this.executeSell(asset);
    } else {
      throw new Error('Invalid transaction type');
    }
  }

  executeBuy(asset) {
    asset.quantity += this.quantity;
  }

  executeSell(asset) {
    if (asset.quantity >= this.quantity) {
      asset.quantity -= this.quantity;
    } else {
      throw new Error(`Insufficient quantity for sale of ${asset.name}`);
    }
  }
}

export { Transaction };