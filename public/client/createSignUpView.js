Shortly.createSignUpView = Backbone.View.extend({
  className: 'signup',

  template: Templates['signup'],

  events: {
    'click a.loginme': 'renderLoginView'
  },

  render: function() {
    this.$el.html( this.template() );
    return this;
  },

  renderLoginView: function(e){
    e && e.preventDefault();
    this.$el.html(Templates['login']());
    return this;
  }
});