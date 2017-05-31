import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePost(post, params) {
      this.sendAction('updatePost', post, params);
    },
    deletePost(post) {
      if (confirm('Are you prepared to banish this ghostly apparition?')) {
        this.sendAction('destroyPost', post);
      }
    }
  }
});
