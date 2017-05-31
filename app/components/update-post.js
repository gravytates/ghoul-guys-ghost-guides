import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    updatePost(post) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        body: this.get('body'),
        img: this.get('img'),
      };
      this.set('updatePostForm', false);
      this.sendAction('updatePost', post, params);
    }
  }
});
