// settings.tsx

import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import clerkClient from 'clerk-sdk-node';

interface SettingsProps {}

interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
}

const Settings: React.FC<SettingsProps> = () => {
  const history = useHistory();
  const { register, handleSubmit, setValue } = useForm<FormData>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await clerkClient.users.updateMyProfile(data);
      history.push('/profile');
    } catch (err) {
      console.error(err);
    }
  });

  return (
    <div>
      <h1>Update Profile</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          ref={register}
          defaultValue={''}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          ref={register}
          defaultValue={''}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          ref={register}
          defaultValue={''}
        />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          ref={register}
          defaultValue={''}
        />

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Settings;