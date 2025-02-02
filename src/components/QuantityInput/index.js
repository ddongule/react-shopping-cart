import React from 'react';
import PropTypes from 'prop-types';
import { FALLBACK } from '../../constants';
import { InputWrapper, Input } from './index.styles';
import ChangeQuantityAddon from '../@common/ChangeQuantityAddon';

const QuantityInput = ({
  quantity = FALLBACK.PRODUCT.QUANTITY,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) => {
  return (
    <InputWrapper>
      <label htmlFor="quantity-input"></label>
      <Input quantity={quantity} />
      <ChangeQuantityAddon
        onIncreaseQuantity={onIncreaseQuantity}
        onDecreaseQuantity={onDecreaseQuantity}
      />
    </InputWrapper>
  );
};

QuantityInput.propTypes = {
  quantity: PropTypes.number,
  onIncreaseQuantity: PropTypes.func,
  onDecreaseQuantity: PropTypes.func,
};

export default QuantityInput;
