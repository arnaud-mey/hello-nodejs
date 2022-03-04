CREATE TABLE IF NOT EXISTS web_content (
	user_id serial PRIMARY KEY,
	page  VARCHAR ( 50 ) UNIQUE NOT NULL,
	content TEXT
);

INSERT INTO web_content (page, content)
VALUES
	('hello',
        'Hello World!')
ON CONFLICT (page)
DO
  UPDATE SET content = EXCLUDED.content;
