import React from 'react';

export class Form extends React.Component {
  render(){
    return (
      <section className="hero is-medium">
        <div className="hero-body">
          <h2 className="title">Add New Bug Report:</h2>
          <form id="bugInputForm">
            <label className="label">Description</label>
            <p className="control">
              <input className="input" type="text" id="description" placeholder="Describe a bug..." />
            </p>
            <label className="label">Severity</label>
            <p className="control">
              <span className="select">
                <select id="severity" name="severity">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </span>
            </p>
            <label className="label">Assigned To</label>
            <p className="control">
              <input className="input" type="text" id="assignedTo" placeholder="Enter responsible..." />
            </p>
            <div className="control is-grouped">
              <p className="control">
                <button className="button is-warning">Submit</button>
              </p>
            </div>
          </form>
        </div>
      </section>
    )
  }
}
