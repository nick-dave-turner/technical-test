import React from "react";
import styled from "styled-components";

import Widget from "../Widget";

const FormRow = styled.div`
  margin-top: 10px;
  &:first-child {
    margin: 0;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.625rem;
  border-radius: 0.625rem;
  border: 0 none;
  background: #ededed;
`;

const Select = styled.select`
  width: 100%;
  height: 38px;
  padding: 0.625rem;
  border-radius: 0.625rem;
  border: 0 none;
  background: #ededed;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.625rem;
  border-radius: 0.625rem;
  border: 0 none;
  background: #337ab7;
  color: #ffffff;
  cursor: pointer;
  &[disabled] {
    opacity: 0.5;
  }
`;

type TradeFormProps = {
  symbols: Array<IStockSymbol>;
};

const TradeForm: React.FC<TradeFormProps> = ({ symbols }) => {
  return (
    <Widget title="Submit Trade">
      <form>
        <FormRow>
          <Select placeholder="Stock" name="stockSymbol">
            <option>Choose Stock</option>
            {symbols.map((symbol: IStockSymbol) => {
              return (
                <option key={symbol.id} value={symbol.stockSymbol}>
                  {symbol.stockSymbol}
                </option>
              );
            })}
          </Select>
        </FormRow>
        <FormRow>
          <Input placeholder="Price" name="price" type="number" />
        </FormRow>
        <FormRow>
          <Input placeholder="Quantity" name="quantity" type="number" />
        </FormRow>
        <FormRow>
          <Button type="button" name="submit-button">
            Submit trade
          </Button>
        </FormRow>
      </form>
    </Widget>
  );
};

export default TradeForm;
