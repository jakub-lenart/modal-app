import React, { Component } from 'react';
import { MainHeader, InsuranceTypeModal } from '.';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    }

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({isModalVisible: true })
  }

  hideModal() {
    this.setState({isModalVisible: false})
  }

  render() {
    return (
      <main>
        {this.state.isModalVisible && (
          <InsuranceTypeModal
            isVisible={this.state.isModalVisible}
            options={this.state.insuranceOptions}
            updateOption={this.toggleInsuranceOptions}
            close={this.hideModal}
          />
        )}
        <MainHeader btnAction={this.showModal} />
      </main>
    );
  }
}

export default App;
