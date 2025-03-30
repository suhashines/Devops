.PHONY: run-database
run-database:
	@echo "Running database..."
	docker run -d \
		-e POSTGRES_PASSWORD=123 \
		-v pgdata:/var/lib/postgresql/data \
		-p 5433:5432 \
		--restart unless-stopped \
		postgres:15.1-alpine


.PHONY: run-backend
run-backend:
	@echo "Running backend..."
	node ./src/index.js

