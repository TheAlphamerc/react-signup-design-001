import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="card">
        <h2 className="card-header">Create Account</h2>

        <div className="signup-holder">
          Already have an account ?<a href="/login">Sign in</a>
        </div>

        <div className="form">
          <div className="form-group">
            <input type="text" class="input" className="form-control" placeholder="Full name" />
          </div>

          <div className="form-group">
            <input type="text" class="input" className="form-control half" placeholder="First name"/>
            <input type="text" class="input" className="form-control half" placeholder="Last name"/>
          </div>

          <div className="form-group">
            <input type="email" class="input" className="form-control" placeholder="Email"/>
          </div>

          <button className="submit-button">Sign up</button>
          <label className="terms">
            <input type="checkbox" /> I have agreed to the
            <a href="/terms-n-condition">terms of service</a>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
