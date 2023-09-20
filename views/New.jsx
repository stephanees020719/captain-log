// Create the view, it should contain a form with the following:
// formwith action="/logs"and method="POST"
// inputtype text for a title
// inputtype textarea for an entry
// inputtype checkbox for shipIsBroken
// inputtype submit

const React = require("react")

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New</h1>
        <form action="/logs" method="POST">
          <input type="text" name="title" />
          <textarea name="entry"></textarea>
          <input type="checkbox" name="shipIsBroken" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

module.exports = New