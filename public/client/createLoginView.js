Shortly.createLoginView = Backbone.View.extend({
  className: 'login',

  template: Templates['login'],

  events: {
    'click a.signupme': 'renderLoginView'
  },

  render: function() {
    this.$el.html( this.template() );
    return this;
  },


  renderLoginView: function(e){
    e && e.preventDefault();
    this.$el.html(Templates['signup']());
    return this;
  }
});