import Model from 'ember-data/model';
import DS from 'ember-data';

const {
  attr,
  belongsTo
} = DS;
// attrs - to let ember know the data type, string integers etc
// extract attr from ds



export default Model.extend({
  user: belongsTo('user'),

  title: attr('string'),
  body: attr('string')
});
