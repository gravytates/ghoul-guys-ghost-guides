import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(comment) {
      if (confirm('perform ritual to cleanse this space?')) {
        this.sendAction('destroyComment', comment);
      }
    }
  }
});
