import Ember from 'ember';

const { Route, set } = Ember;



export default Route.extend({
  model() {
    return this.store.findAll('post');
  },

  setupController(controller, model) {
    set(controller, 'posts', model);
  }
});




//

// model hook, happens implicitly
// return all posts, to render on template
// access the store, which stores all of our information
// once a request is made, stores info so another request doesn't need to be made
// should another request be made
// other queries include query for particular records, find record by id

// sets up our controller
