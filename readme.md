## Perfection Learning Style Guide

# Universal

Editor
- single tab (2 columns)


# HTML Style Guide

Quotes

```
<div class="some-class" ng-class="{ 'has-error' : true } ">
  {{'Item: ' + item.name}}
</div>
<!-- note that the JS is still single quoted -->
```

# LESS/CSS Style Guide

Naming

```
.classes-must-use-hyphens-not-underscores {
}

.class {
  .use-less-nesting-where-possible {
  }
  &:hover {
  }
}

#avoid using ids unless absolutely necessary
```
[http://oli.jp/2011/ids/]()

# Javascript Style Guide

This guide is baed on the AirBNB Style Guide for ES5 can be found here:
[http://github.com/airbnb/javascript/tree/master/es5
]()

Naming

```
var class_id = 1; // use camel case, not underscores
var classId = 1;
```

Comments

```
// comment where necessary and appropriate
// use good naming and readable code to prevent over-commenting

```

Quotes

```
var firstName = "Chris"; // no double quotes
var firstName = 'Chris'; // always use single quotes
```

Promises

```
// confusing, wrapped markup:

function getCourses(id) {
  return Course.getById(id).then(getBooks);
}

function doStuff(data) {
  // do stuff
}

function getBooks(data) {
  if (!_.has(data, 'id')) return;
  return Books.getById(data.id).then(doStuff, bookErr);
}

function bookErr(err) {
  // handle err
}

// much better
Course.getById(id).then(function(data) {
  if (!_.has(data, 'id')) return;
  Books.getById(data.id).then(function(data) {
  	// do stuff
  }, function(err) {
  	// manually handle books error
  });
});

// arrow notation coming soon
Course.getById(id).then((data) => {
  if (!_.has(data, 'id')) return;
  Books.getById(data.id).then((data) => {}, (err) => {});
});
```

# Angular Style Notes

Use framework guidelines for uses of directives, modules, controllers, services, factories, providers, filters, interceptors, etc.

- Continue to use component (directive) model.
- No DOM manipulation outside of directives.
- Take advantage of ng-form and view validation tools like ng-pattern for validation. Validation logic should generally not be in the controller.
- Controllers will be dead in Angular 2.X. Factories and Services are your friends.
