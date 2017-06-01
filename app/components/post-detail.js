import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
      if (confirm('Are you sure you would like to perfom this exorcism?')) {
        this.sendAction('destroyPost', post);
      }
    },
    destroyComment(comment) {
      this.sendAction('destroyComment', comment);
    },
    updateComment(comment, params) {
      this.sendAction('updateComment', comment, params)
    }
  }
});
