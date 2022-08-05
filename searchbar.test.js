const{isBetween, checkUsername} = require("./searchbar")


test("check length is greater than min and less than max", ()=>{
  const result = isBetween("ramjay", 3, 10);
  expect(result).toBe(true);
});

test("check length is greater than min and less than max", ()=>{
  const result = isBetween("ram", 5, 10);
  expect(result).toBe(false);
});

test("check username is valid ", ()=> {
  const result = checkUsername("ramJay1702");
  expect(result).toBe(true);
});

test("check username is valid ", ()=> {
  const result = checkUsername("Rj");
  expect(result).toBe(false);
});

test("check username is valid ", ()=> {
  const result = checkUsername("");
  expect(result).toBe(false);
});

test("check username is valid ", ()=> {
  const result = checkUsername("aaaaaaaaaaabbbbbbbbbbbbbccccccccccccccccccddddddddddddddddddd");
  expect(result).toBe(false);
});
