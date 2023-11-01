{
   // Object destructure
   const user = {
     id : 123,
     name : {
       fname : 'md',
       midname : 'likhon',
       lname : 'mia'
     },
     contact : "01913000000",
    address : 'dhaka'
    }
    const {contact, name: {fname : firstName}, id} = user;


// Array destructure

 const names = ['robiul','likhon', 'milon', 'sobuj','mokbul'];
  // first 2 names will be skipped & idx-2 name will be consider as best friend, and rest take last names i mean after milon
  const [,,bestFriend, ...rest] = names; 


}