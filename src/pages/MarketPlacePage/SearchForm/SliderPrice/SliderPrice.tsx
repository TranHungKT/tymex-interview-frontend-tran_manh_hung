import React from 'react';

import { Button, Form, Slider, SliderSingleProps } from 'antd';
const marks: SliderSingleProps['marks'] = {
  0: {
    style: {
      marginTop: '2rem',
      color: '#D6D6D6',
    },
    label: '0.01 ETH',
  },
  200: {
    style: {
      marginTop: '2rem',
      color: '#D6D6D6',
    },
    label: '200 ETH',
  },
};

export default function SliderPrice() {
  return (
    <Form.Item label="PRICE" name="priceRange" layout="vertical">
      <Slider
        range
        max={200}
        min={0.01}
        marks={marks}
        onChange={() => {}}
        onChangeComplete={() => {}}
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
