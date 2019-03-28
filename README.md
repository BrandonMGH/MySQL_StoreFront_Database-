
**Section 12  (Node.js & MySQL) Bamazon Customer and Manager Assignment**

![Bamazon](images/Bamazon.png)

**Assignment Details:**

In this assignment, we were tasked with creating a virtual storefront in that terminal that would be responsive to a variety of user inputs.  For users interacting with the Bamazon Customer virtual storefront, they are provided options that allowed them to choose items for purchase and then purchase those items provided the items were available for purchase (in stock).  For users interacting with the Bamazon Manager interface, they are provided with options that require them to make decisions related to the updating of items in the storefront.  This could include updating item inventory, adding new items or checking to which inventory items are low for the entire storefront.

*Functionality Note*:
The assignment requested that we have the users on the Bamazon Customer virtual store app request the items they want to purchase by inputing an ID # in a given prompt field, but I felt it would be slightly easier for them to have a list with the name of the items they could scroll through

**APPS USED IN THIS PROJECT**

* inquirer NPM
* MySql NPM
* Console.table NPM 


**GETTING STARTED**
* Clone down this respository
* Open your terminal of choice in the corresponding folder containing the cloned repository  
* Run npm install to install all the necessary packages listed in the depencies section of the package.json file
* In ther terminal, type "node bamazonCustomer.js" to begin Bamazon Customer Storefront Ap or "node bamazonManager.js" to begin the Bamazon Manager Storefront. 


**INSTRUCTIONS FOR BAMAZON CUSTOMER APP**

1. Once the bamazonCustomer.js file has been loaded, a virtual storefront will appear in the form of a table with all the items currently available.  Shortly thereafter, a list will appear containing the available items to choose from.  Once there, ythe user can choose an item from the list provided. 

2. Once the user has chosen an item, a new input prompt will appear asking the user how many items they would like to purchase, at which point the user will have to enter a number in the form of an integer.  If the number provided is less than the inventory quantity of the item, the purchase will be a success and the quantity purchased as input by the user will be removed from the item inventory.  If the number provided is greater than the current inventory quantity of the item, then a message will be returned stating that there are not enough items in the inventory and to please choose a new item.  

3. After an item purchase quantity has been entered and a response returned, a new prompt will appear asking the customer whether or not they would like to continue shoping or exit the app?  If they select the option that allows them to continue shopping, then they are returned to the beginning of the app and begin again at step 1.  Otherwise, if they select the exit option, the app thanks them for shopping with them and the connection is terminated. 

**INSTRUCTIONS FOR BAMAZON MANAGER APP**

1.  Once the bamazonManager.js file has been loaded, a list of options will appear prompting the user to select one of five options:

    * View Products for Sale
        -  Selecting this option will display the current items for sale, the department they are in, their price and their current inventory levels
    * View Low Inventory
        -  Selecting this option will display the current items with inventory quantity amounts below the number 50 
    * Add to Inventory
        -  Selecting this option will allow the user to increase(or decrease by using a negative number) the inventory quantity count for items in the virtual storefront.
            *Note:* Some items are unique and cannot have their item quantities increased. 
    * Add New Product
        - Selecting this ption will allow the user to add a new item to the virtual storefront, as well as assign the new item a to a department and give it a price.
            *Note:* Some items are unique and cannt be added into the virtual storefront. 
    * Exit
        - Terminates the connection, allowing the user to exit the app

2.  After the user is done with one of the five options listed above, the user is then provided the same 5 options again as listed above 


**Screencastify Link:**
* https://drive.google.com/file/d/1AjRFtQ3U3yYur1bC8dyevKgp6DCrJQD6/view

**Author:** Brandon Harris 