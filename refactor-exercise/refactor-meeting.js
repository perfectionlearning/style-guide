////////////////////////////////////////////////////////////
// transform some data
////////////////////////////////////////////////////////////
function transformSomeData(data)
{
  for (var key in data)
  {
    if (data.hasOwnProperty(key))
    {
      data[key].fullName = data[key].firstName + data[key].lastName;
    }
  }

  return
  {
    data: data;
  }

}

///////////////////////////////////////////////////////////
// fetch some data based on id
///////////////////////////////////////////////////////////
getSomeData(id, callback)
{
  Service.get(id).then(
    callback
  );
}

getSomeData(123, function(data) {
  transformSomeData(data);
  showSomeData(data);
}


function showSomeData(data) {
  _.each(data, function(entry, i) {
    console.log('full name: ', entry.fullName)
  }
}

// -- service --

var PresidentialCandidates = {};

PresidentialCandidates.data = {
  status: 'success',
  data:
    [
      { id : 123, firstName : 'donald', lastName : 'drumpf' },
      { id : 234, firstName : 'teddy', lastName : 'cruz' },
      { id : 345, firstName : 'hillary' },
      { id : 456, firstName : 'bernie', lastName : 'sanders' }
    ]
};

Service.getById = function(id) {
  if (!id) return;
  var data = Service.data;
  return result = _.find(data, { id: id });
};
