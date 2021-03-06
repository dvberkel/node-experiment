Node Experiment
===============

[![Build Status](https://secure.travis-ci.org/dvberkel/node-experiment.png?branch=master)](http://travis-ci.org/dvberkel/node-experiment)

This project aims to explore the various intracies of developing a
[node][1] applications.

Environment
-----------

[Node][1] can be installed by following an installation [guide][2] or
[building][3] from source.

We will be using Node Package Manager ([npm][4]) which comes with
node. Run the following command to retrieve all the dependencies.

    npm install

Test
----

    npm test

will run all the test in this project.

Run
---

The command below will start the node server

    npm start

It expects a running [Redis][5] database with no frills.

Execute the command above to run the tests in this project.

[1]: http://nodejs.org/ "Homepage of Node"
[2]: http://joyeur.com/2010/12/10/installing-node-and-npm/ "A no-nonsense guide to start with node"
[3]: https://github.com/joyent/node#to-build "Build instructions for node as found on GitHub"
[4]: http://npmjs.org/ "Node Package Manager's Homepage"
[5]: http://redis.io/ "Redis Homepage"

