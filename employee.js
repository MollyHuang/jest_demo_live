const axios = require('axios')

const methods = {
  makeChange(付現, 費用) {
    return 付現 - 費用;
  },
  returnVariable(variable) {
    return variable
  },
  profile: function () {
    return {
      name: '小明'
    }
  },
  friends: ['小美', '杰倫', '漂亮阿姨'],
  getData: () => {
    return axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => {
        // console.log(res.data);
        return res.data;
      })
  }
}

// methods.getData();
// console.log(methods.getData()); // 應該看不到結果
/*
let data2 = {};
methods.getData().then(data => {
  data2 = data;
  console.log(2, data2);  // 後
});
console.log(1, data2);  // 先
// cmd 可執行 node employee.js 來測試上方//結果
*/


// console.log(methods.makeChange(300, 150));
module.exports = methods;   // node.js 寫法