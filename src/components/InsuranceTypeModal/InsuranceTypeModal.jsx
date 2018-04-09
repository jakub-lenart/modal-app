import React from 'react';
import { InsuranceForm } from '..';
import Styles from './InsuranceTypeModal.css';

const InsuranceTypeModal = ({close}) => (
  <div className={Styles.modal}>
    <button
      className={Styles.modalClose}
      onClick={close}
    ></button>
    <InsuranceForm />
  </div>
)

export default InsuranceTypeModal;
