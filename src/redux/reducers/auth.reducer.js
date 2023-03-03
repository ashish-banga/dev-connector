import { ActionTypes, AuthTypes } from "../type/auth.type";
import { DashboardTypes } from "../type/auth.type";
import { PostTypes } from "../type/auth.type";

const loginInitialState = {
  isLoading: false,
  isLoggedIn: false,
  loginData: {},
};

const initialState = {
  isLoading: false,
  isSignIn: false,
  userSession: [],
};

const profileInitialState = {
  profileCreated: false,
  profileData: {},
};

const educationInitialState = {
  eduactionFilled: false,
  educationData: [],
};

const experienceInitialState = {
  experienceFilled: false,
  experienceData: [],
};

const postInitialState = {
  postCreated: false,
  postData: [],
};
export const AuthReducer = (state = loginInitialState, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN_PENDING:
      return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
      };

    case AuthTypes.LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
      };

    case AuthTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        loginData: action.payload,
      };
    default:
      return state;
  }
};

export const SignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.SIGNUP_PENDING:
      return {
        ...state,
        isLoading: true,
        isSignIn: false,
      };
    case AuthTypes.SIGNUP_FAILED:
      return {
        ...state,
        isLoading: false,
        isSignIn: false,
      };
    case AuthTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSignIn: true,
        userSession: [...state.userSession, action.payload],
      };
    default:
      return state;
  }
};
export const ProfileReducer = (state = profileInitialState, action) => {
  switch (action.type) {
    case DashboardTypes.PROFILE_FAILED:
      return {
        ...state,
        profileCreated: false,
      };
    case DashboardTypes.PROFILE_SUCCESS:
      return {
        ...state,
        profileCreated: true,
        profileData: action.payload,
      };

    default:
      return state;
  }
};
export const EducationReducer = (state = educationInitialState, action) => {
  switch (action.type) {
    case DashboardTypes.EDUCATION_FAILED:
      return {
        ...state,
        eduactionFilled: false,
      };
    case DashboardTypes.EDUCATION_SUCCESS:
      return {
        ...state,
        eduactionFilled: true,
        educationData: [...state.educationData, action.payload],
      };
    case ActionTypes.EDUCATION_DELETED:
      state.educationData.splice(action.val, 1);
      return {
        ...state,
        educationData: [...state.educationData],
      };

    default:
      return state;
  }
};
export const ExperienceReducer = (state = experienceInitialState, action) => {
  console.log("ExperienceReducer", action);
  switch (action.type) {
    case DashboardTypes.EXPERIENCE_FAILED:
      return {
        ...state,
        experienceFilled: false,
      };
    case DashboardTypes.EXPERIENCE_SUCCESS:
      return {
        ...state,
        experienceFilled: true,
        experienceData: [...state.experienceData, action.payload],
      };
    case ActionTypes.EXPERIENCE_DELETED:
      state.experienceData.splice(action.val, 1);
      return {
        ...state,
        experienceData: [...state.experienceData],
      };
    default:
      return state;
  }
};

export const PostReducer = (state = postInitialState, action) => {
  switch (action.type) {
    case PostTypes.POST_SUCCESS:
      return {
        ...state,
        postCreated: true,
        postData: [...state.postData, action.payload],
      };
    case PostTypes.POST_FAILED:
      return {
        ...state,
        postCreated: false,
      };
    case PostTypes.POST_DELETE:
      state.postData.splice(action.val, 1);
      return {
        ...state,
        postData: [...state.postData],
      };
    case PostTypes.POST_ADDLIKE:
      state.postData[action.val].count =
        state?.postData?.[action.val]?.count + 1;
      console.log("AddIndex", state?.postData?.[action.val]);
      return {
        ...state,
        postData: [...state.postData],
      };
    case PostTypes.POST_DISLIKE:
      state.postData[action.val].count =
        state?.postData?.[action.val]?.count - 1;
      return {
        ...state,
        postData: [...state.postData],
      };
    default:
      return state;
  }
};
