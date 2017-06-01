import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    updateCommentForm() {
      this.set('updateCommentForm', true);
    },
    updateComment(comment) {
      var full_date = new Date($.now());
      var dayDate = (full_date.getMonth() + 1) + "/" + full_date.getDate() + "/" + full_date.getFullYear();
      var params = {
        author: this.get('author'),
        date: dayDate,
        body: this.get('body'),
        post: this.get('post')
      };
      this.set('updateCommentForm', false);
      this.sendAction('updateComment', params);
    }
  }
});
