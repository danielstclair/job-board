var React = require('react/dist/react');

module.exports = React.createClass({
  render: function(){
    return (
      <section className="main-container job-tips">
        <h3>Tips for your job posting</h3>
        <ul>
          <li>
            <p><span className="tip-title">Add Keywords</span> because the majority of candidates seach for available positions using keywods, make sure you use all relevant keywords in your posting.</p>
          </li>
          <li>
            <p><span className="tip-title">Use familiar job titles.</span> Use specific but familiar job titles in your postings. Make sure the titles are clear and succinct.</p>
          </li>
          <li>
            <p><span className="tip-title">Give Them Details.</span> The purpose of posting a job is to spark a candidate's interest in the acailable position. When job postings have detailed descriptions, candidates tend to apple to them more.</p>
          </li>
          <li>
            <p><span className="tip-title">Expand Your Location.</span> Do not lomit your job posting to a restricted area around the job's location. Make sure to include some surrounding cities and metropolitan areas in your searches.</p>
          </li>
          <li>
            <p><span className="tip-title">Discuss Compensation.</span> Even though you may not want to give an exact compensation, give a range. Make sure to point out any bonuses, commissions, or monetary compensation, as well.</p>
          </li>
        </ul>
      </section>
    )
  }
})