--#1
-- ALTER TABLE books_categories
-- ALTER COLUMN book_id
-- SET NOT NULL;

-- ALTER TABLE books_categories
-- ALTER COLUMN category_id
-- SET NOT NULL;

-- ALTER TABLE books_categories
-- DROP CONSTRAINT books_categories_book_id_fkey,
-- DROP CONSTRAINT books_categories_category_id_fkey;

-- ALTER TABLE books_categories
-- ADD CONSTRAINT books_categories_book_id_fkey
-- FOREIGN KEY (book_id)
-- REFERENCES books(id)
-- ON DELETE CASCADE;

-- ALTER TABLE books_categories
-- ADD CONSTRAINT books_categories_category_id_fkey
-- FOREIGN KEY (category_id)
-- REFERENCES categories(id)
-- ON DELETE CASCADE;

--#2
-- SELECT b.id, b.author, string_agg(c.name, ', ') FROM books as b
-- INNER JOIN books_categories as bc
-- ON b.id = bc.book_id
-- INNER JOIN categories as c
-- ON c.id = bc.category_id
-- GROUP BY b.id
-- ORDER BY b.id ASC;

--#3

-- ALTER TABLE books
-- ALTER COLUMN title
-- TYPE TEXT;

-- INSERT INTO books (author, title)
-- VALUES ('Lynn Sherr', 'Sally Ride: America''s First Woman in Space');

-- INSERT INTO categories (name)
-- VALUES ('Space Exploration');

-- INSERT INTO books_categories (book_id, category_id)
-- VALUES (4, 5), (4, 1), (4, 7);

-- INSERT INTO books (author, title)
-- VALUES ('Charlotte Brontë', 'Jane Eyre');

-- INSERT INTO books_categories (book_id, category_id)
-- VALUES (5, 2), (5, 4);

-- INSERT INTO books (author, title)
-- VALUES ('Meeru Dhalwala and Vikram Vij', 'Vij''s: Elegant and Inspired Indian Cuisine');

-- INSERT INTO categories (name)
-- VALUES ('Cookbook'), ('South Asia');

-- INSERT INTO books_categories (book_id, category_id)
-- VALUES (6, 8), (6, 1), (6, 9);

--#4
-- ALTER TABLE books_categories
-- ADD CONSTRAINT unique_combinations
-- UNIQUE(book_id, category_id);

-- DROP CONSTRAINT books_categories_book_id_category_id_key;

--#5
-- SELECT c.name, count(b.id) as book_count, string_agg(b.title, ', ') as book_titles
-- FROM categories as c
-- INNER JOIN books_categories as bc
-- ON c.id = bc.category_id
-- INNER JOIN  books as b
-- ON b.id = bc.book_id
-- GROUP BY c.name
-- ORDER BY c.name ASC;