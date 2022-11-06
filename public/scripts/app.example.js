class App {
  constructor() {
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init(filterer) {
    await this.load(filterer);
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.classList.add('col-12');
      node.classList.add('col-lg-4');
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load(filterer) {
    let cars = await Binar.listCars(filterer);
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
