'use strict';

Presidents.getById(123).then(function(data) {
  render(data);
});

var render = function(data) {
  _.each(data, function(entry, i) {
    console.log('full name: ', entry.fullName);
  });
};

// -- service --

var Presidents = {};

Presidents.transform = function(data) {
  _.each(data, function(obj, i) {
    if (obj.firstName && obj.lastName) {
      obj.fullName = obj.firstName + ' ' + obj.lastName;
    }
  });
  return data;
};

Presidents.mockData = [
  { id : 123, firstName : 'donald', lastName : 'drumpf' },
  { id : 234, firstName : 'teddy', lastName : 'cruz' },
  { id : 345, firstName : 'hillary' },
  { id : 456, firstName : 'bernie', lastName : 'sanders' }
];

Presidents.all = function() {
  var data = Presidents.transform(Presidents.mockData);
  return {
    status: 'success',
    data: data
  };
};

Presidents.getById = function(id) {
  var data = Presidents.transform(Presidents.mockData);
  var result = _.findWhere(data, { id: id }) || false;
  return result;
};
