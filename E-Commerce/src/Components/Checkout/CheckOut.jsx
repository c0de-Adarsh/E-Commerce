import React, { useState } from 'react';
import { Button, Label, Modal, TextInput } from "flowbite-react";
import toast from 'react-hot-toast';

const CheckOut = () => {
  const [openModal, setOpenModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    fullName: "",
    address: "",
    mobile: "",
    pincode: ""
  });

  const handleChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
    console.log(orderDetails);
  };

  const handleOrder = (e) => {
    e.preventDefault();
    if (!orderDetails.fullName || !orderDetails.address || !orderDetails.pincode || !orderDetails.mobile) {
      return toast.error('All fields are required');
    } else {
      toast.success("Order successful!");
      onCloseModal();
    }
  };

  function onCloseModal() {
    setOpenModal(false);
    setOrderDetails({
      fullName: "",
      address: "",
      mobile: "",
      pincode: ""
    });
  }

  return (
    <div>
      <>
        <Button onClick={() => setOpenModal(true)} className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-2 text-sm text-white uppercase w-full">
          CheckOut
        </Button>
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your Full Name" />
                </div>
                <TextInput
                  name='fullName'
                  value={orderDetails.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Enter Full Address" />
                </div>
                <TextInput
                  name='address'
                  type="text"
                  onChange={handleChange}
                  value={orderDetails.address}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Your Pincode" />
                </div>
                <TextInput
                  value={orderDetails.pincode}
                  onChange={handleChange}
                  name='pincode'
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your Mobile Number" />
                </div>
                <TextInput
                  value={orderDetails.mobile}
                  onChange={handleChange}
                  name='mobile'
                  required
                />
              </div>
              <div className="w-full">
                <Button className='w-full' onClick={handleOrder}>
                  Order Now
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};

export default CheckOut;
