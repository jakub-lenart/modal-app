import React from 'react';
import { InsuranceForm } from '..';
import Styles from './InsuranceTypeModal.css';

const InsuranceTypeModal = ({close}) => (
  <div className={Styles.Modal}>
    <button
      className={Styles.ModalClose}
      onClick={close}
    ></button>
    <InsuranceForm />
  </div>
)

export default InsuranceTypeModal;
