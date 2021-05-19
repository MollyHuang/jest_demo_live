const employee = require('./employee.js');
/*
// desc + tab
describe('僱員行為', () => {

  test('拿500元，預期會找零300', () => {
    const 現金 = 500;
    const 帳單 = 200;

    expect(employee.makeChange(現金, 帳單)).toBe(300);
  });

});


// desc + tab
describe('隨便測試', () => {

  // it + tab
  test('should ', () => {
    // tb + tab
    expect().toBe();
  });


  // it + tab
  test('是不是 Null', () => {
    expect(employee.returnVariable(null)).toBeNull();
  });


  it('是不是 Truthy', () => {
    expect(employee.returnVariable('0')).toBeTruthy();
    expect(employee.returnVariable(0)).toBeTruthy();  // false
    expect(employee.returnVariable([])).toBeTruthy();
    expect(employee.returnVariable([].length)).toBeTruthy();
  });

  it('驗證物件內容是否正確', () => {
    const profile = {
      name: '小明'
    };
    // equal 深度比較，但效能較差，不建議一直用
    expect(employee.profile()).toEqual(profile);
    expect(employee.profile()).toBe(profile);     // false
  });


  it('驗證物件內容是否正確 2', () => {
    const profile = {
      name: '小明'
    };
    expect(employee.returnVariable(profile)).toBe(profile);
    expect(employee.returnVariable(profile)).toBe({
      name: '小明'
    });   // false
  });


  // it + tab
  // NaN === NaN   --> false
  test('是不是 NaN', () => {
    expect(employee.returnVariable(0)).toBeNaN(-0); // false
    expect(employee.returnVariable(NaN)).toBeNaN(NaN);
    // toBe 是用 Object.is(a,b); 來驗證，不是用 === 的方式
    // 所以上面的都不會過
  });


  test('陣列是否包含特定值', () => {
    expect(employee.friends).toContain('杰倫');
  });


  it('數值必須大於 300', () => {
    expect(employee.returnVariable(301)).toBeGreaterThan(300);
  });


  it('字串比對 - email 是否符合格式', () => {
    expect(employee.returnVariable('xxxx@abc.com'))
      .toMatch(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  });

});
*/

describe('驗證非同步', () => {
  it('驗證遠端資料', () => {
    expect.assertions(1);
    return employee.getData(1).then(data => {
      expect(data.title).toMatch('delectus aut autem');
    });
  });

  it('Async 驗證非同步', async () => {
    const data = await employee.getData();
    expect(data.title).toMatch('delectus aut autem');
  });
});