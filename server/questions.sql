CREATE TABLE questions (
  id SERIAL NOT NULL,
  product_id INT NOT NULL,
  body TEXT,
  date_written BIGINT,
  asker_name VARCHAR (30),
  asker_email VARCHAR (50),
  reported BOOLEAN,
  helpful INT,
  PRIMARY KEY (id)
);

copy questions(id, product_id, body, date_written, asker_name, asker_email, reported, helpful)
FROM '/Users/administrator/HR54/SDC/q-a-atelier/questions.csv'
DELIMITER ','
CSV HEADER;
CREATE INDEX product_idx on questions (product_id);