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

function showSomeData = function(data) {
  _.each(data, function(entry, i) {
    console.log('full name: ', entry.fullName)
  }
}

// -- service --

var Service;

///////////////////////////////////////////////////////////
// mock data in Service.data
//////////////////////////////////////////////////////////
var Service.fetchAllNames = function() {
  return
  {
    status: 'success',
    data:
      [
        { 'id' : 123, 'firstName' : 'donald', 'lastName' : 'drumpf' },
        { 'id' : 234, 'firstName' : 'teddy', 'lastName' : 'cruz' },
        { 'id' : 345, 'firstName' : 'hillary' },
        { 'id' : 456, 'firstName' : 'bernie', 'lastName' : 'sanders' },
      ]
  }
}

////////////////////////////////////////////////////////////
// get data from a service based on id
////////////////////////////////////////////////////////////
var Service.getById = function(id) {
  var result;
  var res = Service.getAllNames;
  if (res.status != 'success') return 0;
  for (var key in data) {
    if (key.hasOwnProperty(index)) {
      if (data[key]['id'] == id) {
        return data[key]
      }
    }
  }
  // result = _.findWhere(Service.data(), { id: id })
  return false
}
