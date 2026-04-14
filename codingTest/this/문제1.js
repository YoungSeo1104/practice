const testCar = {
  name: 'benz',
  getName: function () {
    console.log('getname', this.name); //A
    const innerFunc = function () {
      console.log('innerFunc:', this.name); //B
    };
    innerFunc();

    const innerFunc2 = () => {
      console.log('innerFunc2:', this.name); //C
    };
    innerFunc2();
  },
};

testCar.getName();
