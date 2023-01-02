import {profileAPI} from "../API/apiRequests";

let ADD_NEW_POST = 'ADD_NEW_POST'
let CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT'
let SET_PROFILE_INFO = 'SET_PROFILE_INFO'
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
let SET_STATUS = 'SET_STATUS'

let defaultImage = 'https://social-network.samuraijs.com/activecontent/images/users/19785/user.jpg'
const initialState = {
    profileInfo: {
        fullName: 'Solo',
        aboutMe: 'Ready for everything',
        photos: {
            small: defaultImage,
            large: defaultImage,
        },
        contacts: {
            facebook: null,
            website: null,
            vk: 'vk.com/dimych',
            twitter: 'https://twitter.com/@sdf',
            instagram: 'instagram.com/sds',
            youtube: null,
            github: null,
            mainLink: null,
        }
    },
    profileStatus: '',
    posts: [
        {id: '1', text: 'HTML user'},
        {id: '2', text: 'CSS master'},
        {id: '3', text: 'JS is my kung-fu'},
        {id: '1', text: 'I am React GOD!!'},
    ],
    newPostText: 'Assalam Aleikum',
    isFetching: false,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                id: '5',
                text: state.newPostText,
            }
            state.newPostText = ''
            return {...state, posts: [...state.posts, newPost]}
        case CHANGE_NEW_POST_TEXT:
            return {...state, newPostText: action.text}
        case SET_PROFILE_INFO:
            return {...state, profileInfo: {...action.profileInfo}}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: !state.isFetching}
        case SET_STATUS:
            return {...state, profileStatus: action.text}
        default:
            return state
    }

}

export const addNewPost = () => {
    return {type: ADD_NEW_POST}
}
export const changeNewPostText = (text) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        text,
    }
}
export const setProfileInfo = (profileInfo) => {
    return {
        type: SET_PROFILE_INFO,
        profileInfo: profileInfo,
    }
}
export const setStatus = (text) => {
    return {
        type: SET_STATUS,
        text: text,
    }
}
export const toggleIsFetching = () => {
    return {type: TOGGLE_IS_FETCHING}
}

export const getProfile = (id) => {
    return (dispatch) => {
        profileAPI.getUserProfile(id).then(data => {
            dispatch(setProfileInfo(data))
            dispatch(toggleIsFetching())
        })
    }
}

export const getStatus = (id) => {
    return (dispatch) => {
        profileAPI.getStatus(id).then(data => {
            dispatch(setStatus(data))
        })
    }
}
export const updateStatus = (text) => {
    // console.log(text)
    return (dispatch) => {
        profileAPI.updateStatus(text).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(text))
            }
        })
    }
}


export default profileReducer