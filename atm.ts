import inquirer from "inquirer"
let myPinNumber= 1112
let myBalance= 10000; //Dollar

let myPin= await inquirer.prompt([
    {
        name : "Pin",
        type: "number",
        message:" Please Enter your Pin Number",
    
    }]);
    if (myPin.Pin===myPinNumber){
        console.log("Correct pin Number");
     }
      else {
            console.log("incorrect pin number")
        
    }
let accountans= await inquirer.prompt([{


    
        name: "account",
        type: "list",
        message: "please select your account type",
        choices: ["Current Account" ,"Saving Account:"]
}]);
    let transaction= await inquirer.prompt([
        
{

        name: "transactionmethod",
        type: "list",
        message:"please select your transaction method",
        choices :["Cash with draw" , "Fast cash"]

}
]);


if 
(transaction.transactionmethod==="Cash with draw"){}

let amountans = await inquirer.prompt([
    {
        name :"Amount",
        type:"number",
                message:"please enter your ammount",
}]);
if (myBalance>=amountans.Amount){
    myBalance-=amountans.Amount
    console.log(`your current balance is now : ${myBalance}`)
}
else {
    console.log("Insuffient Balance")
}; 

 if(transaction.transactionmethod==="Fast cash"){}
    let fastCash=await inquirer.prompt([
        {
            name:"fast",
            type:"list",
            message:"plz select the amount",
            choices:["1000", "3000","5000","10000"]

}])



if(myBalance>=fastCash.fast){
    myBalance-=fastCash.fast
    console.log(`your remaining balance is now : ${myBalance}`)

}
else{
    console.log( "Sorry Insufficient balance")
};


   








