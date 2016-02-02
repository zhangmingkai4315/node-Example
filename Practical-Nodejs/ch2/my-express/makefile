REPORTER=list
MOCHA_OPTS=--ui bdd -c 

test:
	clear
	echo "Starting test--------------------------------------"

	./node_modules/mocha/bin/mocha \
	--reporter ${REPORTER} \
	${MOCHA_OPTS} \
	test/*.js

	echo "Ending test"

test-w:

	./node_modules/mocha/bin/mocha \
	--growl --watch \
	--reporter ${REPORTER} \
	${MOCHA_OPTS} \
	test/*.js


.PHONY: test test-w