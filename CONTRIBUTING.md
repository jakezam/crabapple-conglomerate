# Contributing

This project uses Typescript with the redux-starter-kit, redux-sagas. It was based off the create-react-app meets
react-boilerplate. You can find that helpful repository here:
https://github.com/react-boilerplate/react-boilerplate-cra-template

We do have little differences here and there but the general structure is pretty much the same.

We do have a CODE_OF_CONDUCT so please understand what is said there as to not break any rules.

# Branches and Pull Requests

If you have a feature or fix you want to implement, create a branch in the form of feature/{username}/{feature_name} and
then develop on that branch. When committing to your feature branch it is not required to follow "conventional commits".
However, once you are ready to merge back into develop you can squash your commits down to one commit that has a message
that uses conventional commits.

You can find how to do that here: https://www.conventionalcommits.org/

# Styles

This project uses ESLINT and Prettier to enforce code styles, so there is nothing you need to do on your end for
styling. Before you commit your husky pre-commit hooks should run eslint and prettier automatically to format code
properly. Note that I say "should" run. When you run yarn install husky should be installed, and your git hooks should
be automatically setup. If not please read the husky documentation to get yourself setup.
