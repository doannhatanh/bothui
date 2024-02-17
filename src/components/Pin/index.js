import React, { useRef, useState } from 'react';

const PinInput = ({ correctPin, onSuccess }) => {
  const [pins, setPins] = useState(new Array(correctPin.length).fill(''));
  const [shake, setShake] = useState(false);
  const ref = useRef(null);

  const handleChange = (index, value) => {
    ref.current.children[index].blur();
    if (index < correctPin.length - 1) {
      ref.current.children[index + 1].focus();
    }

    const newPins = [...pins];
    newPins[index] = value;
    setPins(newPins);

    // Kiểm tra nếu số lượng ký tự nhập đủ thì tự động submit
    if (newPins.filter(pin => pin !== '').length === correctPin.length) {
      handleSubmit(newPins.join(""));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && !pins[index]) {
      // Chuyển focus sang ô nhập trước đó nếu người dùng nhấn Backspace và ô hiện tại rỗng
      ref.current.children[index - 1].focus();
    }
  };

  const handleSubmit = (enteredPin) => {
    if (enteredPin === correctPin) {
      onSuccess();
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setPins(new Array(correctPin.length).fill(''));
      ref.current.children[0].focus();
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5',
      }}
      onClick={() => ref.current.children[pins.indexOf('')].focus()}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }} ref={ref}>
          {pins.map((value, index) => (
            <input
              key={index}
              type="password"
              value={value}
              onChange={e => handleChange(index, e.target.value)}
              onKeyDown={e => handleKeyDown(e, index)}
              autoFocus={index === 0}
              maxLength={1}
              style={{
                width: '40px',
                height: '40px',
                fontSize: '1.5rem',
                marginRight: '10px',
                borderRadius: '8px',
                border: `1px solid ${shake ? '#ff0000' : '#d3d6db'}`,
                textAlign: 'center',
                backgroundColor: 'white',
                outline: 'none',
                transition: 'border-color 0.3s ease',
                animation: shake ? 'shake 0.5s' : 'none',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PinInput;
