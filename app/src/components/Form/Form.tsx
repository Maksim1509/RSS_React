import React, { FormEvent } from 'react';
import './Form.scss';

class Form extends React.Component {
  constructor(props = {}) {
    super(props);
  }

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="date" name="date" data-testid="form-date" required />
        <select name="city" required>
          <option value="saratov">Saratov</option>
          <option value="moscow">Moscow</option>
          <option value="sochi">Sochi</option>
        </select>
        <label>
          Male
          <input type="radio" name="gender" value="male" required />
        </label>
        <label>
          Female
          <input type="radio" name="gender" value="female" required />
        </label>
        <input type="file" name="file" required />
        <label>
          I consent to my personal data
          <input type="checkbox" name="personal-checkbox" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
