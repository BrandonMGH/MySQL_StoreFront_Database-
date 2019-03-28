DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Sorting Hat","Accessories - Magical", 1000, 50);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Hitchhiker's Guide to the Galaxy","Books, Tomes and Scripture", 100, 500);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Holy Hand Grenade","Weapons - Projectiles", 750, 250);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Polyjuice Potion","Potions,Elixirs and Balms", 500, 250);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Neuralyzer","Accessories - Alien Technology", 1000, 500);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Lightsaber","Weapons - Melee ", 1000, 50);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Iron Man Suit Mark L","Armor - Advanced", 50000, 1);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Elder Wand","Weapons - Projectiles", 50000, 1);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("3 dragon eggs","Magical Creatures", 1000000, 1);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Infinity Gauntlet","Accessories - Alien Technology: OUT-OF-STOCK", 500000000, 0);