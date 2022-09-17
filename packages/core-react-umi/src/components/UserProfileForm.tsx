import React, { useEffect, useState } from 'react';
import { useModel } from "umi";

interface UserProfileFormProps {
}

const UserProfileForm: React.FC<UserProfileFormProps> = () => {
  const { globalModel, setGlobalModel } = useModel('useGlobalModel');
  const [user, setUser] = useState<any>(globalModel);

  useEffect(() => {
    setUser(globalModel)
  }, [setGlobalModel]);

  const inputName = (e: React.FormEvent<HTMLInputElement>) => {
    setUser({ ...user, name: e.currentTarget.value })
  }

  const selectEmail = (e: React.FormEvent<HTMLSelectElement>) => {
    setUser({ ...user, email: e.currentTarget.value })
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setGlobalModel(user)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={user.name} onChange={inputName}/>
        </label>
        <label>
          Public email:
          <select value={user.email} onChange={selectEmail}>
            <option value="">Select a verified email to display</option>
            <option value="you@example.com">you@example.com</option>
          </select>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
};

export default UserProfileForm;

