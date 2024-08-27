const UserDetails = () => {
  return (
    <div>
      <h3>Enter Your Details Here</h3>

      <div className="bg-red">
        <label>Enter Nick Name :</label>
        <input type="text" />
        <label>Enter Your Contact Information</label>
        <input type="text" />
        <label>Enter Your Email Address</label>
        <input type="text" />
        <label>Enter Your Address</label>
        <input type="text" />
      </div>
    </div>
  );
};

export default UserDetails;
