import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS for styling

const AppointmentScheduler = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tourType, setTourType] = useState('In Person');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const dates = [
    { day: 'Mon',  date: '21', month: 'Apr' },
    { day: 'Tue',  date: '22', month: 'Apr' },
    { day: 'Wed',  date: '23', month: 'Apr' },
    { day: 'Thru', date: '24', month: 'Apr' },
    { day: 'Fri',  date: '25', month: 'Apr' },
    { day: 'Sat',  date: '26', month: 'Apr' },
  ];

  const handlePrevDate = () => {
    setSelectedDate((prevDate) => new Date(prevDate.setDate(prevDate.getDate() - 1)));
  };

  const handleNextDate = () => {
    setSelectedDate((prevDate) => new Date(prevDate.setDate(prevDate.getDate() + 1)));
  };

  const handleTourTypeChange = (type) => {
    setTourType(type);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your submission logic here
    console.log({
      date: selectedDate,
      tourType,
      time,
      name,
      phone,
      email,
      message,
    });
    alert('Tour request submitted!'); // Placeholder for submission feedback
  };
 
  return (
    <div
      className="flat-tab flat-tab-form widget-filter-search widget-box"
      style={{
        width: '100%',
        // You'd typically handle responsive height in a separate CSS or with a library
        // height: 'auto',
        // overflowY: 'auto',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <button onClick={handlePrevDate} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
          </svg>
        </button>
        <div style={{ display: 'flex' }}>
          {dates.map((item, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '10px',
                textAlign: 'center',
                marginRight: index < dates.length - 1 ? '5px' : 0,
                backgroundColor: index === selectedDate.getDate() - 21 ? '#e9f5ff' : 'white',
                borderColor: index === selectedDate.getDate() - 21 ? '#9c0505' : '#ccc',
                color: index === selectedDate.getDate() - 21 ? '#9c0505' : '#333',
              }}
            >
              <div>{item.day}</div>
              <div style={{ fontSize: '1.2em', fontWeight: 'bold' }}>{item.date}</div>
              <div>{item.month}</div>
            </div>
          ))}
        </div>
        <button onClick={handleNextDate} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Tour Type</div>
        <div style={{ display: 'flex' }}>
          <button
            type="button"
            onClick={() => handleTourTypeChange('In Person')}
            style={{
              flex: 1,
              padding: '10px',
              border: `1px solid ${tourType === 'In Person' ? '#9c0505' : '#ccc'}`,
              backgroundColor: tourType === 'In Person' ? '#e9f5ff' : 'white',
              color: tourType === 'In Person' ? '#9c0505' : '#333',
              borderRadius: '5px',
              marginRight: '5px',
              cursor: 'pointer',
            }}
          >
            In Person
          </button>
          <button
            type="button"
            onClick={() => handleTourTypeChange('Video Chat')}
            style={{
              flex: 1,
              padding: '10px',
              border: `1px solid ${tourType === 'Video Chat' ? '#9c0505' : '#ccc'}`,
              backgroundColor: tourType === 'Video Chat' ? '#e9f5ff' : 'white',
              color: tourType === 'Video Chat' ? '#9c0505' : '#333',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Video Chat
          </button>
        </div>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="time" style={{ display: 'block', marginBottom: '5px' }}>
          Time
        </label>
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            id="time"
            placeholder="Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }}
          />
          <div style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', color: '#777', pointerEvents: 'none' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px' }}>
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>
          Enter your Message
        </label>
        <textarea
          id="message"
          placeholder="Enter your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box', height: '80px' }}
        ></textarea>
      </div>

      <div style={{ marginBottom: '15px', fontSize: '0.8em', color: '#777' }}>
        By submitting this form I agree to <a href="#" style={{ color: '#9c0505', textDecoration: 'none' }}>Terms of Use</a>
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        style={{ backgroundColor: '#9c0505', color: 'white', padding: '12px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%' }}
      >
        Submit a Tour Request
      </button>
    </div>
  );
};

export default AppointmentScheduler;