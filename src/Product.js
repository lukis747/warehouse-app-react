class Product{
  constructor(name,ean,type,weight,color,active)
  {
    this.name = name;
    this.ean = ean;
    this.type = type;
    this.weight = weight;
    this.color = color;
    this.active = active;
  }

  setActivity(state) {
    this.active = state;
  }
}

export default Product;