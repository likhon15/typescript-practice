{
  let a = 2;
  const ans = a > 2 ? 'big' : 'small';
  console.log(ans);
  // for getting output by ts-node-dev command : npm i -g ts-node-dev
  // command : ts-node-dev --respawn --transpile-only <server.ts>
  

  // Type alias
  
  type Student = {
    name : string;
    age : number;
    address : string;
  }

  const info : Student = {
      name :"likhon",
      age : 24,
      address : "savar",
  }

  console.log(info);
 type userName = string;
 const username : userName = "likhon";
 console.log(username);

 type Add = (num1: number, num2:number) => number;

 const add : Add = (num1,num2) => num1 + num2;

}