import { MdCancel } from "react-icons/md";

const UserProfile = () => {
  return (
    <div className="bg-yellow-400 w-[250px] rounded-2xl p-3 ">
      <MdCancel className="text-red-600 size-5 ml-[90%]" />
      <div className="flex flex-col items-center">
        <img src="image.png" alt="" className="w-[150px] rounded-lg" />
        <p>Name</p>
      </div>

      <div>
        <p>Display Name</p>
        <h3>Name</h3>

        <p>Email Address</p>
        <h3>email</h3>

        <p>Address</p>
        <h3>address</h3>

        <p>Phone Number</p>
        <h3>Number</h3>
      </div>
    </div>
  );
};

export default UserProfile;
