import React from 'react';
import { Card, Row, Col, Button, Tag } from 'antd';
import { EditOutlined, DeleteOutlined, CarOutlined } from '@ant-design/icons';

const cars = [
  {
    id: 1,
    name: 'Toyota Camry',
    status: 'Available',
    pricePerDay: 50,
    rentalDuration: '5 Days',
  },
  {
    id: 2,
    name: 'Honda Accord',
    status: 'Rented',
    pricePerDay: 45,
    rentalDuration: '3 Days',
  },
  {
    id: 3,
    name: 'Nissan Altima',
    status: 'Available',
    pricePerDay: 55,
    rentalDuration: '7 Days',
  },
  {
    id: 4,
    name: 'Honda Accord',
    status: 'Rented',
    pricePerDay: 45,
    rentalDuration: '3 Days',
  },
  {
    id: 5,
    name: 'Nissan Altima',
    status: 'Available',
    pricePerDay: 55,
    rentalDuration: '7 Days',
  },
  {
    id: 6,
    name: 'Honda Accord',
    status: 'Rented',
    pricePerDay: 45,
    rentalDuration: '3 Days',
  },
  {
    id: 7,
    name: 'Nissan Altima',
    status: 'Available',
    pricePerDay: 55,
    rentalDuration: '7 Days',
  },
];

const ProListingContainer = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Car Listings</h1>

      <Row gutter={[16, 16]}>
        {cars.map(car => (
          <Col key={car.id} xs={24} sm={12} md={8}>
            <Card
              title={
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">{car.name}</span>
                  <Tag color={car.status === 'Available' ? 'green' : 'red'}>
                    {car.status}
                  </Tag>
                </div>
              }
              actions={[
                <Button icon={<EditOutlined />} type="link">
                  Edit
                </Button>,
                <Button icon={<DeleteOutlined />} type="link" danger>
                  Delete
                </Button>,
              ]}
            >
              <div className="flex items-center space-x-4">
                <CarOutlined style={{ fontSize: '2rem', color: '#1890ff' }} />
                <div>
                  <p className="text-gray-600">Price Per Day: ${car.pricePerDay}</p>
                  <p className="text-gray-600">Rental Duration: {car.rentalDuration}</p>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProListingContainer;
