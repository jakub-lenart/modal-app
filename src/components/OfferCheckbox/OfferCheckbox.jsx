import React, { Component } from 'react';
import cx from 'classnames';
import Styles from './OfferCheckbox.css';

class OfferCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ isChecked: !this.state.isChecked }, () => {
      this.state.isChecked ? this.props.onCheck(this.props.id) : this.props.onUncheck(this.props.id)
    })
  }

  render() {
    const wrapperClassNames = cx({
      [Styles.CheckboxWrapper]: true,
      [Styles.CheckboxWrapperActive]: this.state.isChecked
    })

    return (
      <div className={wrapperClassNames}>
        <input
          className={Styles.Checkbox}
          type="checkbox"
          id={this.props.id}
          onChange={this.handleChange}
        />
        <label
          className={Styles.CheckboxLabel}
          htmlFor={this.props.id}
        >
          <span>{this.props.label}</span>
          <span>{`${this.props.price}€`}</span>
        </label>
      </div>
    );
  }
}

export default OfferCheckbox;
