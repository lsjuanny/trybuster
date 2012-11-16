start:
	@./node_modules/buster/bin/buster server &
	@./node_modules/buster/bin/buster-headless &
test-node:
	@./node_modules/buster/bin/buster \
		test \
		-e node \
		-r specification
test-browser:
	@./node_modules/buster/bin/buster \
		test \
		-e browser \
		-r specification
