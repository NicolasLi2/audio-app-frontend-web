import { Button, Form, message } from 'antd';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { getClient } from '../api/client';

const otpFields = new Array(6).fill('');

export default function Verification() {
  const [otp, setOtp] = useState([...otpFields]);
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = event.target;
    const newOtp = [...otp];
    if (!value) {
      if (!newOtp[index] && index > 0) {
        setActiveOtpIndex(index - 1);
      }
      newOtp[index] = '';
    } else {
      newOtp[index] = value;
      setActiveOtpIndex(index + 1);
    }
    setOtp([...newOtp]);
    console.log(otp);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Backspace') {
      if (activeOtpIndex > 0) {
        setActiveOtpIndex(activeOtpIndex - 1);
      }
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const isValid = otp.every((value) => value.trim());
    if (!isValid) return message.error('Invalid OTP', 3);

    const client = await getClient();
    const { data } = await client.post('/auth/verify-email', {});
    console.log(otp.join(''));
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);

  return (
    <form className='flex flex-col justify-items-center'>
      <div className='mb-6 m-auto'>
        {otpFields.map((_, index) => {
          return (
            <input
              key={index}
              ref={activeOtpIndex === index ? inputRef : null}
              className='otp-field'
              onChange={(event) => handleChange(event, index)}
              onKeyDown={handleKeyDown}
              value={otp[index]}
            />
          );
        })}
      </div>

      <div className='m-auto'>
        <Button type='default' onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </form>
  );
}
