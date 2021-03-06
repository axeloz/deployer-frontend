import Backbone from 'backbone';

import routes from '../routes';

export default class User extends Backbone.Model {
  constructor(attributes, options) {
    super(attributes, options);

    this.urlRoot = routes.users;
  }
}
