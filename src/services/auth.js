//Authentication service which checks for the provides the following methods - getsCurrentUser, logout

const logout = async () => {
    
    localStorage.removeItem("user");
    try {
        const res = await fetch('/api/logout');
        console.log(res);
        return await res.json();
    } catch (err) {
        console.log(err);
    }
}

const getCurrentUser = () => {
    const userObject = localStorage.getItem("user");
    return JSON.parse(userObject)
}

const isUserProjectOwner = (projectCreatedById) => {
    const userObject = localStorage.getItem("user")
    const user = JSON.parse(userObject)
    if (user !== null) {
        console.log(user);
        if(user._id === projectCreatedById) {
            // console.log("User is the Owner of Project");
            return true;
        }
        else {
            // console.log("The User is not the Owner of the Project")
            return false
        }
  
    }
    // console.log("No user is logged in");
    return false
}

const AuthService = {
    logout,
    getCurrentUser,
    isUserProjectOwner
}

export default AuthService