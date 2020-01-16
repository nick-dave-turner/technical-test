// @ts-nocheck

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

type ITrade = {
  stockSymbol: string | null;
  price: number | null;
  quantity: number | null;
};

type TradeFormProps = {
  symbols: Array<IStockSymbol>;
  onSubmit: ({ stockSymbol, price, quantity }: ITrade) => void;
};

const TradeForm: React.FC<TradeFormProps> = ({ symbols, onSubmit }) => {
  const [stockSymbol, updateStockSymbol] = React.useState<string | null>(null);
  const [price, updatePrice] = React.useState<number | null>(null);
  const [quantity, updateQuantity] = React.useState<number | null>(null);

  return (
    <Widget title="Submit Trade">
      <form>
        <FormRow>
          <Select
            placeholder="Stock"
            name="stockSymbol"
            onChange={val => updateStockSymbol(val.target.value)}
          >
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
          <Input
            placeholder="Price"
            name="price"
            type="number"
            onChange={val => updatePrice(Number(val.target.value))}
          />
        </FormRow>
        <FormRow>
          <Input
            placeholder="Quantity"
            name="quantity"
            type="number"
            onChange={val => updateQuantity(Number(val.target.value))}
          />
        </FormRow>
        <FormRow>
          <Button
            type="button"
            name="submit-button"
            onClick={() =>
              onSubmit({
                stockSymbol,
                price,
                quantity
              })
            }
          >
            Submit trade
          </Button>
        </FormRow>
      </form>
    </Widget>
  );
};

export default TradeForm;
