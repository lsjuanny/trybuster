start:
	@./node_modules/buster/bin/buster server &
	@./node_modules/buster/bin/buster-headless &
test-node:
	@./node_modules/buster/bin/buster \
		test \
		-e node
test-browser:
	@./node_modules/buster/bin/buster \
		test \
		-e browser
