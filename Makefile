install:
	pip install -r requirements.txt
	npm install

run:
	python src/python/main.py

run-js:
	node src/javascript/app.js

test:
	pytest tests/
	npm test

clean:
	find . -type f -name '*.pyc' -delete
	find . -type d -name '__pycache__' -delete