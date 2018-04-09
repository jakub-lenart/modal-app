import React, { Component } from 'react';
import { OfferCheckbox } from '..'
import Styles from './InsuranceForm.css';

class InsuranceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      insuranceOptions: [
        { id: 'liability', name: 'Liability insurance', price: 66.35 },
        { id: 'repairs', name: 'Repairs expenses insurance', price: 83.49 },
        { id: 'destruction', name: 'Destruction insurance', price: 83.49 }
      ],
      selected: [],
      totalPrice: 0
    }

    this.addToSelected = this.addToSelected.bind(this);
    this.removeFromSelected = this.removeFromSelected.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  addToSelected(id) {
    this.setState(prevState => ({
      selected: [...prevState.selected, id]
    }), () => this.handleSelectedChange())
  }

  removeFromSelected(id) {
    this.setState(prevState => ({
      selected: prevState.selected.filter((val) => val !== id)
    }), () => this.handleSelectedChange())
  }

  handleSelectedChange() {
    this.resetTotalPrice()
    this.updateTotalPrice()
  }

  resetTotalPrice() {
    this.setState({ totalPrice: 0 })
  }

  updateTotalPrice() {
    this.state.insuranceOptions
      // discard unselected options
      .filter((item) => this.state.selected.indexOf(item.id) > -1)
      // count total price
      .map((item) => this.setState(prevState => ({ totalPrice: prevState.totalPrice + item.price })))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <header className={Styles.formHeader}>
          <h3>Select the insurance:</h3>
        </header>
        {this.state.insuranceOptions && this.state.insuranceOptions.map((item) => {
          return (
            <OfferCheckbox
              key={item.id}
              id={item.id}
              label={item.name}
              price={item.price}
              onCheck={this.addToSelected}
              onUncheck={this.removeFromSelected}
            />
          )
        })}
        <p className={Styles.total}>Total:
          <span>{`${this.state.totalPrice.toFixed(2)}€`}</span>
        </p>
      </form>
    );
  }
}

export default InsuranceForm;
