import React from 'react';
import { Card, Table, Statistic, Row, Col } from 'antd';
import { CarOutlined, DollarOutlined, BookOutlined } from '@ant-design/icons';

const dataSource = [
  {
    key: '1',
    name: 'Toyota Camry',
    status: 'Available',
    pricePerDay: 50,
    rentalDuration: '5 Days',
  },
  {
    key: '2',
    name: 'Honda Accord',
    status: 'Rented',
    pricePerDay: 45,
    rentalDuration: '3 Days',
  },
];

const columns = [
  {
    title: 'Car',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Price Per Day (USD)',
    dataIndex: 'pricePerDay',
    key: 'pricePerDay',
  },
  {
    title: 'Rental Duration',
    dataIndex: 'rentalDuration',
    key: 'rentalDuration',
  },
];

const ProMainDashordContainer = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard - Car Rental Company</h1>

      {/* Key Metrics Section */}
      <Row gutter={16} className="mb-6">
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Cars"
              value={150}
              prefix={<CarOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Active Rentals"
              value={35}
              prefix={<BookOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Revenue"
              value={25000}
              prefix={<DollarOutlined />}
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
      </Row>

      {/* Car Listings Section */}
      <Card title="Car Listings">
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    </div>
  );
};

export default ProMainDashordContainer;
