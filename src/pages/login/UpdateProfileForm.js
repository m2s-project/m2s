import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../redux/userSlice";
import Title from "../../components/titlebar/Title";

const UpdateProfileForm = () => {
  const { user, loading, error } = useSelector((state) => state.users);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    if (user && displayName && email) {
      dispatch(updateUserProfile({ uid: user.uid, displayName, email }));
    }
  };

  return (
    <div  className="register col-12">
      <Title />
     
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Mise à jour..." : "Mettre à jour"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProfileForm;
