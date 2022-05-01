CREATE TABLE IF NOT EXISTS Products(
    id BIGINT (20),
    product_name VARCHAR (100),
    product_quantity INTEGER,
    PRIMARY KEY AUTOINCREMENT(
        id
));

INSERT or IGNORE INTO Products(id, product_name, product_quantity) VALUES (1, 'Dollynho uva 2 litros', 5);
INSERT or IGNORE INTO Products(id, product_name, product_quantity) VALUES (2, 'Dollynho amora 2 litros', 5);
INSERT or IGNORE INTO Products(id, product_name, product_quantity) VALUES (3, 'Dollynho cola 2 litros', 5);
INSERT or IGNORE INTO Products(id, product_name, product_quantity) VALUES (4, 'Dollynho abacaxi 2 litros', 10);
INSERT or IGNORE INTO Products(id, product_name, product_quantity) VALUES (5, 'Dollynho limão 2 litros', 10);
INSERT or IGNORE INTO Products(id, product_name, product_quantity) VALUES (6, 'Dollynho laranja 2 litros', 10);
INSERT or IGNORE INTO Products(id, product_name, product_quantity) VALUES (7, 'Dollynho franboesa 2 litros', 2);
INSERT or IGNORE INTO Products(id, product_name, product_quantity) VALUES (8, 'Dollynho guarana 2 litros', 2);

