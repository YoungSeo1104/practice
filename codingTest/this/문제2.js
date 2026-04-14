//age 뒤에 this.unit을 붙이는 방법은?
const ageQuestion = {
  unit: '살',
  ageList: [10, 20, 30],
  getAgeList: function () {
    const result = this.ageList.map(function (age) {
      return age;
    });

    console.log(result);
  },
};

ageQuestion.getAgeList();

// 정답
// ----

const ageAnswer = {
  unit: '살',
  ageList: [10, 20, 30],
  getAgeList: function () {
    const result = this.ageList.map((age) => {
      return String(age) + this.unit;
    });

    console.log(result);
  },
};

ageAnswer.getAgeList();
