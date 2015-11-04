var React = require('react/dist/react');

module.exports = React.createClass({
  render: function(){
    return (
      <section className="main-container job-form">
        <h3>Post your job</h3>
        <form>
          <p>Title</p>
          <input type="text" />
          <p>Company Name</p>
          <input type="text" />
          <p>Location</p>
          <input type="text" />
          <p>Description</p>
          <textarea></textarea>
          <p>Tags</p>
          <input type="text" />
          <button>Submit Job</button>
        </form>
      </section>
    )
  }
});