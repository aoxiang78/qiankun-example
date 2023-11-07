import React, { useEffect, useState } from 'react';
import { useModel } from "@@/plugin-model/useModel";

const UserProfileForm: React.FC<{}> = () => {
  const { globalModel, setGlobalModel } = useModel('useGlobalModel');
  const [user, setUser] = useState<any>(globalModel);

  useEffect(() => {
    setUser(globalModel)
  }, [setGlobalModel]);

  const inputName = (e: any) => {
    setUser({ ...user, name: e.target.value })
  }

  const inputEmail = (e: any) => {
    setUser({ ...user, email: e.target.value })
  }

  const handleSubmit = (e) => {
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
          <select value={user.email} onChange={inputEmail}>
            <option value="">Select a verified email to display</option>
            <option value="you@example.com">you@example.com</option>
          </select>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    </div>)
};

export default UserProfileForm;

