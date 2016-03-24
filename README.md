# eminem.css

![build passing](https://api.travis-ci.org/travis-ci/travis-web.svg?branch=master)
![everything ok](https://img.shields.io/badge/everything-ok-yellow.svg)
![vc funding failing :( (contact us)](https://img.shields.io/badge/vc%20funding-failing-red.svg)

**eminem.css** is a sleek, intuitive, responsive and scalable modern asynchrenous lightweight front-end framework for both large and tiny web applications.

It works by using well established best practices and modern web standards. eminem.css was created by [Marko Klopets](https://klopets.com) and is maintained by the [core team](https://klopets.com) with the massive support and involvement of our healthy and active community.

## Quick start

Several quick start options are available:

* [Download the latest release](https://github.com/mklopets/eminem-css/archive/master.zip)
* Clone the repo: ``git clone https://github.com/mklopets/eminem-css.git``
* Install with ``npm``: ``npm install eminem-css``

You can have a look at the Getting Started page of the repo in ``docs/index.html`` for examples on usage.

Here are the basics:

Use the ``white-wrapper`` class on an element to turn it into an eminem element. This will automatically apply all of the necessary styles and scripts for the specified element.

Alternatively, you can use the ``data-white-wrapper`` attribute on any element to turn it into an ``eminem`` element. For this, assign its value to the string ``'eminem'`` like so: ``data-white-wrapper="eminem"``. Please note that ``data-red-wrapper`` and others are not yet supported by ``eminem.css``. If you think they should be included, please [open a new issue](https://github.com/mklopets/eminem-css/issues/new).

You can use the two methods interchangeably as shown here:

```
<div class="white-wrapper">
    <h1>Eminem</h1>
    <!-- more content here -->
</div>
<span data-white-wrapper="eminem">Eminem</span>
```

## What's included

```
eminem-css/
├── css/
│   ├──eminem.css
├── scss/
│   ├──eminem.scss
├── fonts/
    ├──eminem.otf
    ├──eminem.svg
    ├──eminem.ttf
    ├──eminem.woff
    ├──eminem.woff2
```

Please note that some of the provided eminem fonts might not work entirely as expected at the time of release. We are passively working to resolve the issue.

## Bugs and feature requests

Have a bug or a feature request? Please first search for existing and closed issues. If your problem or idea is not addressed yet, please [open a new issue](https://github.com/mklopets/eminem-css/issues/new).

## Building

**eminem.css** is built using SCSS. By default, the project uses [``Gulp``](http://gulpjs.com/) to compile code into vanilla CSS. For this, first run ``npm install`` to make sure you have all the local modules installed (you also need to have the npm package [``gulp``](https://www.npmjs.com/package/gulp) installed globally).

```
npm install -g gulp # installs Gulp globally
npm install # installs packages required to compile the CSS into node_modules/

gulp styles # compiles the SCSS into CSS
gulp # the default task, watches the scss/ directory for changes
```
