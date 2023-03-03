import { AuthTypes, PostTypes } from "../type/auth.type";
import { DashboardTypes } from "../type/auth.type";
import { ActionTypes } from "../type/auth.type";
export const loginAction = (signUpData, signInData) => {
  return (dispatch) => {
    // console.log("9 login", data);
    console.log("double", signInData, signUpData);

    const loginPromise = new Promise((res, rej) => {
      const Auth = signUpData?.filter((login) => {
        if (
          login.enteredEmail === signInData.loginEmail &&
          login.enteredPass === signInData.loginPass
        ) {
          return login;
        }
      });
      console.log("Auth", Auth);
      setTimeout(() => {
        if (Auth.length) {
          res(Auth);
        } else {
          alert("Invalid, Username or Password don't match");
          rej("Login Failed");
        }
      }, 500);
    });

    loginPromise
      .then((res) => {
        dispatch({
          type: AuthTypes.LOGIN_SUCCESS,
          payload: res,
        });
      })
      .catch((err) => {
        dispatch({
          type: AuthTypes.LOGIN_FAILED,
        });
      });
  };
};

export const signUpAction = (userData) => {
  return (dispatch) => {
    console.log("33", userData);

    const signUpPromise = new Promise((res, rej) => {
      setTimeout(() => {
        if (userData) {
          res({ userData });
        } else {
          rej("User Data is Empty");
        }
      }, 500);
    });

    signUpPromise
      .then((res) => {
        dispatch({
          type: AuthTypes.SIGNUP_SUCCESS,
          payload: userData,
        });
      })
      .catch((err) => {
        dispatch({
          type: AuthTypes.SIGNUP_FAILED,
        });
      });
  };
};

export const profileAction = (editProfile) => {
  return (dispatch) => {
    console.log("ProfileAction", editProfile);
    const profilePromise = new Promise((res, rej) => {
      setTimeout(() => {
        if (editProfile) {
          res(editProfile);
        } else {
          rej("Profile not created");
        }
      }, 500);
    });
    profilePromise
      .then((res) => {
        dispatch({
          type: DashboardTypes.PROFILE_SUCCESS,
          payload: res,
        });
      })
      .catch((err) => {
        dispatch({
          type: DashboardTypes.PROFILE_FAILED,
        });
      });
  };
};
export const educationAction = (educationInput) => {
  return (dispatch) => {
    const educationPromise = new Promise((res, rej) => {
      setTimeout(() => {
        if (educationInput) {
          res({ educationInput });
        } else {
          rej("Education Info not found!!");
        }
      }, 500);
    });
    educationPromise
      .then((res) => {
        dispatch({
          type: DashboardTypes.EDUCATION_SUCCESS,
          payload: educationInput,
        });
      })
      .catch((err) => {
        dispatch({
          type: DashboardTypes.EDUCATION_FAILED,
        });
      });
  };
};
export const experienceAction = (experienceInput) => {
  return (dispatch) => {
    const experiencePromise = new Promise((res, rej) => {
      setTimeout(() => {
        if (experienceInput) {
          res({ experienceInput });
        } else {
          rej("Experience Info not found!!");
        }
      }, 500);
    });
    experiencePromise
      .then((res) => {
        dispatch({
          type: DashboardTypes.EXPERIENCE_SUCCESS,
          payload: experienceInput,
        });
      })
      .catch((err) => {
        dispatch({
          type: DashboardTypes.EXPERIENCE_FAILED,
        });
      });
  };
};

export const experienceDelete = (i) => {
  console.log("ArrayExperineceIndex", i);
  return {
    type: ActionTypes.EXPERIENCE_DELETED,
    val: i,
  };
};
export const educationDelete = (i) => {
  console.log("ArrayEducationIndex", i);
  return {
    type: ActionTypes.EDUCATION_DELETED,
    val: i,
  };
};
export const PostAction = (postDetails) => {
  return (dispatch) => {
    const postPromise = new Promise((res, rej) => {
      setTimeout(() => {
        if (postDetails) {
          res({ postDetails });
        } else {
          rej("Post Data not found!!");
        }
      }, 100);
    });
    postPromise
      .then((res) => {
        dispatch({
          type: PostTypes.POST_SUCCESS,
          payload: postDetails,
        });
      })
      .catch((err) => {
        dispatch({
          type: PostTypes.POST_FAILED,
        });
      });
  };
};
export const PostActionUpdate = (i, actionType) => {
  if (actionType == "POST_DELETE") {
    return {
      type: PostTypes.POST_DELETE,
      val: i,
    };
  }
  if (actionType == "POST_ADDLIKE") {
    return {
      type: PostTypes.POST_ADDLIKE,
      val: i,
    };
  }
  if (actionType == "POST_DISLIKE") {
    return {
      type: PostTypes.POST_DISLIKE,
      val: i,
    };
  }
};
