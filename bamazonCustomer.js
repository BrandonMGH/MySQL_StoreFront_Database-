const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');



const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "MySQL32119",
  database: "bamazon_DB"
}); connection.connect(err => {
  if (err) throw err;


  printTable();

});

function followUp() {
  inquirer.prompt([
    {
      name: "choiceTwo",
      type: "list",
      message: "What would you like to do?",
      choices: ["Continue Shopping", "Exit"]
    },
  ]).then(function (response) {
    if (response.choiceTwo === "Continue Shopping") {  //** CONTINUE WORKING ON GETTING THE VALUE FROM THE INPUT RESPONSE ABOVE */
      printTable();
    } else {
      console.log("***Thank you for shopping at FANTASY EMPORIUM GALACTICA!  Please come back soon!***")
      connection.end();
    }

  })
}


function printTable() {
  connection.query("SELECT * FROM products", (err, res) => {
    if (err) throw err;
    console.table(res);
  });
  setTimeout(function () {
    start();
  }, 1000);
}


function start() {
  console.log(`\n***WELCOME TO THE FANTASY EMPORIUM GALACTICA!***\n`)
  console.log(`\n......\n`)
  connection.query("SELECT * FROM products", (err, results) => {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "choice",
          type: "list",
          choices: function () {
            let choiceArray = [];
            for (let i = 0; i < results.length; i++) {
              choiceArray.push(results[i].product_name);
            }
            return choiceArray;
          },
          message: "What item would you like to purchase?"
        },
        {
          name: "quantity",
          type: "input",
          message: "How many units would you like to purchase?"
        }
      ]).then(function (answer) {
        let selectedItem;
        for (let i = 0; i < results.length; i++) {
          if (results[i].product_name === answer.choice) {
            selectedItem = results[i];
          }
        }
        if (selectedItem.stock_quantity >= parseInt(answer.quantity)) {
          let invDeduct = selectedItem.stock_quantity -= answer.quantity
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: invDeduct
              },
              {
                id: selectedItem.id
              }
            ],
            function (error) {
              if (error) throw err;
              let priceTotal = answer.quantity *= selectedItem.price
              console.log(`\nThank you for your purchase! The total cost of your purchase today is ${priceTotal} units\n`);
              followUp();
            }
          );
        }
        else {
          console.log("\nNot enough items remaining in inventory.  Please lower the number of items requested or choose a different item\n`");
          followUp();
        }

      });
  });
}


