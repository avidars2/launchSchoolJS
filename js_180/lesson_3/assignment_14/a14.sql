--#1
-- CREATE TABLE customers (
--   id SERIAL PRIMARY KEY,
--   name TEXT NOT NULL,
--   payment_token char(8) UNIQUE CHECK(payment_token = UPPER(payment_token))
-- );

-- CREATE TABLE services (
--   id SERIAL PRIMARY KEY,
--   description TEXT NOT NULL,
--   price numeric(10, 2) CHECK(price >= 0.00)
-- );

-- INSERT INTO customers (id, name, payment_token)
-- VALUES 
-- (1,'Pat Johnson' ,'XHGOAHEQ'),
-- (2,'Nancy Monrea','JKWQPJKL'),
-- (3,'Lynn Blake', 'KLZXWEEE'),
-- (4,'Chen Ke-Hua' ,'KWETYCVX'),
-- (5,'Scott Lakso' ,'UUEAPQPS'),
-- (6,'Jim Pornot', 'XKJEYAZA');

-- INSERT INTO services (id, description, price)
-- VALUES
-- (1  , 'Unix Hosting' , 5.95),
-- (2  , 'DNS' , 4.95),
-- (3  , 'Whois Registration' , 1.95),
-- (4  , 'High Bandwidth' , 15.00),
-- (5  , 'Business Support' , 250.00),
-- (6  , 'Dedicated Hosting' , 50.00),
-- (7  , 'Bulk Email' , 250.00),
-- (8  , 'One-to-one Training' , 999.00);


-- CREATE TABLE customers_services (
--   id SERIAL PRIMARY KEY,
--   customer_id INT REFERENCES customers(id) ON DELETE CASCADE NOT NULL,
--   service_id INT REFERENCES services(id) NOT NULL,
--   UNIQUE(customer_id, service_id)
-- );

-- INSERT INTO customers_services (customer_id, service_id)
-- VALUES
-- (1, 1),
-- (1, 2),
-- (1, 3),
-- (3, 1),
-- (3, 2),
-- (3, 3),
-- (3, 4),
-- (3, 5),
-- (4, 1),
-- (4, 4),
-- (5, 1),
-- (5, 2),
-- (5, 6),
-- (6, 1),
-- (6, 6),
-- (6, 7);

--#2
-- SELECT DISTINCT c.id, c.name, c.payment_token FROM customers as c
-- INNER JOIN customers_services as cs
-- ON c.id = cs.customer_id;
-- -- INNER JOIN services as s
-- -- ON s.id = cs.service_id;

--#3
-- SELECT DISTINCT c.* FROM customers as c
-- LEFT JOIN customers_services as cs
-- ON c.id = cs.customer_id
-- WHERE cs.customer_id IS NULL; 

--For each customer on customers list
--Get customers who's id is NOT on join table

--#3 Further Exploration
-- SELECT DISTINCT c.*, s.* FROM customers as c
-- FULL OUTER JOIN customers_services as cs
-- ON c.id = cs.customer_id
-- FULL OUTER JOIN services as s
-- ON s.id = cs.service_id
-- WHERE cs.customer_id IS NULL OR
-- cs.service_id IS NULL;

--#4 
-- SELECT s.* FROM customers_services as cs
-- RIGHT OUTER JOIN services as s
-- ON s.id = cs.service_id
-- WHERE cs.service_id IS NULL;

--#5
-- SELECT c.name, string_agg(s.description, ', ') as services FROM customers as c
-- LEFT JOIN customers_services as cs
-- ON c.id = cs.customer_id
-- LEFT JOIN services as s
-- ON s.id = cs.service_id
-- GROUP BY c.name;

--#6
-- SELECT s.description, count(cs.service_id) AS count FROM services as s
-- INNER JOIN customers_services as cs
-- ON cs.service_id = s.id
-- GROUP BY s.description
-- HAVING count(cs.service_id) >= 2;

--#7
--Count amount of services purchased
--Total the price per service

--For each service id, get price and sum it

-- SELECT sum(s.price) as gross FROM services as s
-- INNER JOIN customers_services as cs
-- ON cs.service_id = s.id;

--#8
-- INSERT INTO customers ("name", payment_token)
-- VALUES ('John Doe', 'EYODHLCN');

-- INSERT INTO customers_services (customer_id, service_id)
-- VALUES (7, 1), (7, 2), (7, 3);

--#9
-- SELECT sum(s.price) FROM customers_services as cs
-- INNER JOIN services as s
-- ON s.id = cs.service_id
-- WHERE s.price > 100; 

--For each customer, get the sum of all services above
-- $100 * each customer

-- SELECT (sum(s.price))
-- FROM customers
-- CROSS JOIN services as s
-- WHERE s.price > 100; 

--#10
-- DELETE FROM customers WHERE id = 4;
-- DELETE FROM customers_services WHERE id = 16;
-- DELETE FROM services WHERE id = 7;