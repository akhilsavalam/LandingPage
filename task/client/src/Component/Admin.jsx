import React, { useEffect, useState } from 'react';

const AdminView = () => {
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch customer data
    const fetchCustomerData = async () => {
      try {
        const response = await fetch('/api/customerData');
        if (response.ok) {
          const data = await response.json();
          setCustomerData(data);
        } else {
          // Handle failure
        }
      } catch (error) {
        // Handle error
      }
    };

    fetchCustomerData();
  }, []);

  // Calculate the sum of quantities for each customer and total
  const calculateSumOfQuantities = () => {
    let customer1Sum = 0;
    let customer2Sum = 0;
    let totalSum = 0;

    customerData.forEach((customer) => {
      customer1Sum += customer.customer1.quantity;
      customer2Sum += customer.customer2.quantity;
      totalSum += customer.customer1.quantity + customer.customer2.quantity;
    });

    return { customer1Sum, customer2Sum, totalSum };
  };

  // Calculate the sum of weights for each customer and total
  const calculateSumOfWeights = () => {
    let customer1Sum = 0;
    let customer2Sum = 0;
    let totalSum = 0;

    customerData.forEach((customer) => {
      customer1Sum += customer.customer1.weight;
      customer2Sum += customer.customer2.weight;
      totalSum += customer.customer1.weight + customer.customer2.weight;
    });

    return { customer1Sum, customer2Sum, totalSum };
  };

  // Calculate the sum of box counts for each customer and total
  const calculateSumOfBoxCounts = () => {
    let customer1Sum = 0;
    let customer2Sum = 0;
    let totalSum = 0;

    customerData.forEach((customer) => {
      customer1Sum += customer.customer1.boxCount;
      customer2Sum += customer.customer2.boxCount;
      totalSum += customer.customer1.boxCount + customer.customer2.boxCount;
    });

    return { customer1Sum, customer2Sum, totalSum };
  };

  return (
    <div>
      <h2>Customer Data</h2>
      <table>
        <thead>
          <tr>
            <th>Item/Customer</th>
            <th>Customer1</th>
            <th>Customer2</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Quantity</td>
            <td>{calculateSumOfQuantities().customer1Sum}</td>
            <td>{calculateSumOfQuantities().customer2Sum}</td>
            <td>{calculateSumOfQuantities().totalSum}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{calculateSumOfWeights().customer1Sum}</td>
            <td>{calculateSumOfWeights().customer2Sum}</td>
            <td>{calculateSumOfWeights().totalSum}</td>
          </tr>
          <tr>
            <td>Box Count</td>
            <td>{calculateSumOfBoxCounts().customer1Sum}</td>
            <td>{calculateSumOfBoxCounts().customer2Sum}</td>
            <td>{calculateSumOfBoxCounts().totalSum}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminView;
