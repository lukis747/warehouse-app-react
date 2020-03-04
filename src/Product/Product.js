class Product{
  constructor(id,name,ean,type,weight,color,active,price,quantity,priceHistory = [],quantityHistory =[])
  {
    this.id = id;
    this.name = name;
    this.ean = ean;
    this.type = type;
    this.weight = weight;
    this.color = color;
    this.active = active;
    this.price = price;
    this.quantity = quantity;

    this.priceHistory = priceHistory;
    this.quantityHistory = quantityHistory;

    if (priceHistory.length === 0) {
      this.addPriceHistoryEvent(price);
    }

    if (quantityHistory.length === 0) {
      this.addQuantityHistoryEvent(quantity);
    }
  }

  setActivity(state) {
    this.active = state;
  }

  addPriceHistoryEvent(price){
    this.priceHistory.push({
      value:price,
      date: new Date()
    });
  }

  addQuantityHistoryEvent(quantity){
    this.quantityHistory.push({
      value:quantity,
      date: new Date()
    });
  }
}

export default Product;