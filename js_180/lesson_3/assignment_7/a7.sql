--#2
-- ALTER TABLE orders
-- ADD CONSTRAINT product_id_fkey 
-- FOREIGN KEY (product_id)
-- REFERENCES products(id);

--#3
-- INSERT INTO products (name)
-- VALUES ('small bolt'), ('large bolt');
-- INSERT INTO orders (product_id, quantity)
-- VALUES (1, 10), (1, 25), (2, 15);

--#4
-- SELECT o.quantity, p.name 
-- FROM orders AS o
-- INNER JOIN products AS p
-- ON o.product_id = p.id;

--#5
--You can't insert a row into orders without a value in the product_id column
--This is because a foreign key constraint preserves referential integrity by
--Rejecting invalid inserts such as null values
--Maybe if a DEFAULT was provided it would be okay

--I was wrong - null can be added. Why? Because anything evaluating against null is null so it's like a loophole
--A not null constraint is needed to prevent this

-- INSERT INTO orders (product_id, quantity) VALUES (null, 2);
-- DELETE FROM orders where id = 6;

--#6
-- ALTER TABLE orders
-- ALTER COLUMN product_id
-- SET NOT NULL;
--Raises error due to existing null value
--Error is gone after deleting null value from orders table

--#8
-- CREATE TABLE reviews (
--   id serial PRIMARY KEY,
--   product_id INT REFERENCES products(id),
--   body text NOT NULL
-- )


--#9
INSERT INTO reviews (product_id, body) 
VALUES (1, 'a little small'),
(1, 'very round!'),
(2, 'could have been smaller');