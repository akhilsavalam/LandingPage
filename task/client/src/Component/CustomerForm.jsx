import React, { useState } from 'react';

const CustomerForm = () => {
  const [orderDate, setOrderDate] = useState('');
  const [company, setCompany] = useState('');
  const [owner, setOwner] = useState('');
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [weight, setWeight] = useState('');
  const [requestForShipment, setRequestForShipment] = useState('');
  const [trackingId, setTrackingId] = useState('');
  const [shipmentSize, setShipmentSize] = useState('');
  const [boxCount, setBoxCount] = useState('');
  const [specification, setSpecification] = useState('');
  const [checklistQuantity, setChecklistQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation on the form inputs
    // ...

    // Make a POST request to store customer details
    try {
      const response = await fetch('/api/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderDate,
          company,
          owner,
          item,
          quantity,
          weight,
          requestForShipment,
          trackingId,
          shipmentSize,
          boxCount,
          specification,
          checklistQuantity,
        }),
      });

      if (response.ok) {
        // Handle success
      } else {
        // Handle failure
      }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className='flex'>
    <form onSubmit={handleSubmit} className='customer-form'>
      <label>
        Order Date:
      </label>
      <input
          type="date"
          value={orderDate}
          onChange={(e) => setOrderDate(e.target.value)}
        />
      <label>
        Company:
      </label>
      <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      <label>
        Owner:
      </label>
      <input
          type="text"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />
      <label>
        Item:
      </label>
      <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      <label>
        Quantity:
      </label>
      <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      <label>
        Weight:
      </label>
      <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      <label>
        Request for Shipment:
      </label>
      <input
          type="text"
          value={requestForShipment}
          onChange={(e) => setRequestForShipment(e.target.value)}
        />
      <label>
        Tracking ID:
      </label>
      <input
          type="text"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
        />
      <label>
        Shipment Size:
      </label>
      <input
          type="text"
          value={shipmentSize}
          onChange={(e) => setShipmentSize(e.target.value)}
        />
      <label>
        Box Count:
      </label>
      <input
          type="number"
          value={boxCount}
          onChange={(e) => setBoxCount(e.target.value)}
        />
      <label>
        Specification:
      </label>
      <input
          type="text"
          value={specification}
          onChange={(e) => setSpecification(e.target.value)}
        />
      <label>
        Checklist Quantity:
      </label>
      <input
          type="number"
          value={checklistQuantity}
          onChange={(e) => setChecklistQuantity(e.target.value)}
        />
      <button type="submit" className='btn'>Submit</button>
    </form>
    </div>
  );
};

export default CustomerForm;
