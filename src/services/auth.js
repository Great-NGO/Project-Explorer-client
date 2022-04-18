//Authentication service which checks for the provides the following methods - getsCurrentUser, logout

const logout = async () => {
  localStorage.removeItem("user");
  try {
    const res = await fetch("/api/logout");
    console.log(res);
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const getCurrentUser = () => {
    return getWithExpiry("user")
};

const isUserProjectOwner = (projectCreatedById) => {
  const userObject = localStorage.getItem("user");
  const user = JSON.parse(userObject);
  if (user !== null) {
    console.log(user);
    if (user._id === projectCreatedById) {
      // console.log("User is the Owner of Project");
      return true;
    } else {
      // console.log("The User is not the Owner of the Project")
      return false;
    }
  }
  // console.log("No user is logged in");
  return false;
};

//Set user in localstorage for two hours after which user is expired
const setWithExpiry = (key, value, ttl=1000*60*60*2) => {
  const now = new Date();

  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };

  localStorage.setItem(key, JSON.stringify(item));
};

const getWithExpiry = (key) => {
  const itemStr = localStorage.getItem(key);
  //If the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);

  const now = new Date();
  //Compare the expiry time of the item with the current time
  if(now.getTime() > item.expiry) {
      //If the item is expired, delete the item from local storage
      localStorage.removeItem(key)
      return null;
  }

  return item.value

};

const AuthService = {
  logout,
  getCurrentUser,
  isUserProjectOwner,
  setWithExpiry,
  getWithExpiry
};

export default AuthService;
