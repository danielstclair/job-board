var React = require('react/dist/react');

module.exports = React.createClass({
  render: function(){
    return (
      <section className="main-container job-form">
        <h3>Post your job</h3>
        <form>
          <p>Title</p>
          <input type="text" id="job-title" />
          <p>Company Name</p>
          <input type="text" id="job-company" />
          <p>Location</p>
          <input type="text" id="job-location" />
          <p>Description</p>
          <textarea id="job-description"></textarea>
          <p>Tags</p>
          <input type="text" id="job-tags" />
          <button id="submit-job">Submit Job</button>
        </form>
      </section>
    )
  }
});