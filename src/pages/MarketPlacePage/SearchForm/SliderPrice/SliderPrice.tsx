import React from 'react';

import { Button, Form, Slider, SliderSingleProps, Typography } from 'antd';
const marks: SliderSingleProps['marks'] = {
  0: {
    style: {
      marginTop: '1rem',
      color: '#D6D6D6',
      transform: 'translateX(-10%)',
    },
    label: '0.01 ETH',
  },
  200: {
    style: {
      marginTop: '1rem',
      color: '#D6D6D6',
      transform: 'translateX(-75%)',
    },
    label: '200 ETH',
  },
};

interface SliderPriceProps {
  onChange: (values: number[]) => void;
}

export default function SliderPrice({ onChange }: SliderPriceProps) {
  return (
    <Form.Item
      label={
        <Typography.Title level={5} color="#FFFFFF">
          PRICE
        </Typography.Title>
      }
      name="priceRange"
      layout="vertical"
    >
      <Slider
        data-testId="teststst"
        range
        max={200}
        min={0.01}
        defaultValue={[0.01, 200]}
        marks={marks}
        onChangeComplete={onChange}
        styles={{
          track: {
            background: 'transparent',
          },
          tracks: {
            background: 'linear-gradient(90deg, rgba(218,69,143,1) 100%, rgba(218,52,221,1) 100%)',
          },
          handle: {
            borderColor: 'white',
          },
        }}
        tooltip={{
          formatter: (value) => <Button type="primary">{value} ETH</Button>,
        }}
      />
    </Form.Item>
  );
}
