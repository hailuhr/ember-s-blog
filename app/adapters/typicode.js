import DS from 'ember-data';


export default DS.RESTAdapter.extend({
  host: 'https://jsonplaceholder.typicode.com'
});

// namespace: 'api/v1/tests'

// more idiomatic
// base adapter to extend from that,
// ie queries
