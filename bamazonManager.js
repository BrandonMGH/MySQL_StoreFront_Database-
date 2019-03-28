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


  prompt();

});


function prompt() {
  inquirer.prompt([
    {
      name: "InitPrompt",
      type: "list",
      message: "What would you like to do",
      choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "Exit"]
    },
  ]).then(function (response) {

    let prompResponse = (response.InitPrompt)

    switch (prompResponse) {
      case 'View Products for Sale':
        ViewProduct();
        break;
      case 'View Low Inventory':
        LowInventory();
        break;
      case 'Add to Inventory':
        UpdateInventory();
        break;
      case 'Add New Product':
        AddProduct();
        break;
      default:
        Exit (); 
    }
  })

}

function ViewProduct() {
  connection.query("SELECT * FROM products", (err, res) => {
    if (err) throw err;
    console.table(res);
    prompt();
  });
}

function LowInventory() {
  connection.query("SELECT * FROM products", (err, res) => {
    if (err) throw err;
    for (let i = 0; i < res.length; i++) {
      if (res[i].stock_quantity < 50) {
        console.table(res[i])
      }
    }
    prompt();
  });
}

function UpdateInventory() {
  connection.query("SELECT * FROM products", (err, res) => {
    inquirer.prompt([
      {
        name: "StockPrompt",
        type: "list",
        choices: function () {
          let choiceArray = [];
          for (let i = 0; i < res.length; i++) {
            choiceArray.push(res[i].product_name);
          }
          return choiceArray;
        },
        message: "What item would you like to add more of?",
      },
      {
        name: "quantity",
        type: "input",
        message: "How many units would you like to add?"
      }
    ]).then(function (response) {
      let selectedItem;
      if (response.StockPrompt === "Infinity Gauntlet" || response.StockPrompt === "The One Ring"|| response.StockPrompt === "Elder Wand") {
        console.log("Sorry.  This item is a unique item and cannot be restocked.")
        prompt();
      } else {
        for (let i = 0; i < res.length; i++) {
          if (res[i].product_name === response.StockPrompt) {
            selectedItem = res[i];
            let addInventory = response.quantity
            let addInventoryInt = parseInt(addInventory)
            connection.query(
              "UPDATE products SET ? WHERE ?",
              [
                {
                  stock_quantity: addInventoryInt += selectedItem.stock_quantity
                },
                {
                  id: selectedItem.id
                }
              ],
              function (error) {
                if (error) throw err;
                console.log(`\nInventory Updated!\n`);
              }
            );
          }
        }
        setTimeout(function () {
          prompt();
        }, 1000);
      }
    })
  });
}

function AddProduct() {
  inquirer.prompt([
    {
      name: "ItemAdd",
      type: "input",
      message: "What item would you like to add to the inventory list?",
    },
    {
      name: "DepartmentAdd",
      type: "input",
      message: "What Department would you like to assign the new item too? "
    },
    {
      name: "PriceAdd",
      type: "input",
      message: "What is the price of the new item?"
    },
  ]).then(function (response) {
    let itemAdd = response.ItemAdd
    let departmentAdd = response.DepartmentAdd
    let priceAdd = response.PriceAdd
    if (itemAdd === "Infinity Gauntlet" || itemAdd === "The One Ring" || itemAdd === "Elder Wand"  ) {
      console.log("Sorry.  This item is a unique item and cannot be restocked. Please enter another item")
      AddProduct
    } else {
      var query = connection.query(
        "INSERT INTO products SET ?", 
        [
          {
            product_name: itemAdd,
            department_name: departmentAdd,
            price: priceAdd
          }
        ],
        function (err, res) {
          if (err) throw err;
          console.log(`New Item (${itemAdd}) has been added!`);
        }
      );
    }
    setTimeout(function () {
      prompt();
    }, 2000)
  })

}

function Exit (){ //  *** PICK UP FROM HERE AFTER CLASS *** 
  console.log(`**Connection Terminated**`)
  connection.end();
}