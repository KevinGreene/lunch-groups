Spantree Lunch Groups
---------------------

Spantree is an organization that places a lot of value in personal relationships both with clients and team members.
As a result, we've historically placed a lot of value on lunches, as food has always been a time for community.

Luckily, Spantree has seen a lot of success, and intensely grown over the past year or two. As a result, lunches can get big, 
and as the size of a community grows, the level of personal communication sometimes diminishes.

This app is to test out smaller lunches. Initially developed for two, this will hopefully expand significantly in functionality.

Conceived by Gary Turovsky, Implemented By Kevin Greene.

Developing
==========

In order to get started, simple go to the root directory, and type:

```bash

grunt serve
```

To push to gh-pages, type

```bash
grunt build
cp -R app/users dist/
git subtree push --prefix dist origin gh-pages
```