
const {validation} = require("./edit profile");

test("check is function valid", ()=>{
    expect(validation()).toBeDefined();
});


// test("check fname returns valid",()=>{
//     const fname="";
//     expect(fname).toBe(false);
// });

 // const lname="netha"
    // const uname="ram1702"
    // const password="ram1234"
    // const cpassword="ram1234"

 // expect(lname).toBe(true);
    // expect(uname).toBe(true);
    // expect(password).toBe(true);
    // expect(cpassword).toBe(true);