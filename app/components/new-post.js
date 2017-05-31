import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  hidePosts: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
      this.set('hidePosts', true);
    },
    savePost() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author') ? this.get('author') : "",
        date: this.get('date') ? this.get('date') : "",
        body: this.get('body') ? this.get('body') : "",
      };
      this.set('addNewPost', false);
      this.set('hidePosts', false);
      this.sendAction('savePost', params);
    }
  }

});
