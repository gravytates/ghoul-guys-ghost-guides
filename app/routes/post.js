import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    updatePost(post, params) {
      post.save();
      this.transitionTo('index');
    },
    destroyPost(post) {
      var commentDeletions = post.get('comments').map(function(comment){
        return comment.destroyRecord();
      });
      Ember.RSVP.all(commentDeletions).then(function(){
        return post.destroyRecord();
      });
      this.transitionTo('index');
    },
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function(){
        return post.save();
      });
      this.transitionTo('post');
    },
    destroyComment(comment) {
      comment.destroyRecord();
      this.transitionTo('post');
    },
    updateComment(comment, params) {
      // console.log(comment, params);

      comment.save();
      this.transitionTo('post');
    }
  }
});
