function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  Array.prototype.swap = function(x, y) {
    var b = this[x];
    this[x] = this[y];
    this[y] = b;
  }

  Array.prototype.bubbleSort = function() {
    let n = this.length
    for(let i = 0; i < n-1; i++) {
      for(let j = 0; j < n-i-1; j++) {
        if(this[j].year < this[j+1].year) {
          this.swap(j, j+1)
        }
      }
    }
  }

  result.bubbleSort()

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
