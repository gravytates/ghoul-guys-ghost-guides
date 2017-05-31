import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePost(post, params) {
      this.sendAction('updatePost', post, params);
    }
  }
});
