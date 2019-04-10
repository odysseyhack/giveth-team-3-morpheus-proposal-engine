/**
 * Created by will on 10/04/19.
 */
export const initialState = {
  user: null
};

export const userActions = {
  login: 'LOGIN',
  spend: 'SPEND'
}

export function reducer(state, action) {
  switch (action.type) {
    case userActions.login:
      return {
        ...state,
        user: action.user,
      }
    case userActions.spend:
      return {
        ...state ,
        user: {
          name: state.user.name,
          totalBalance: state.user.totalBalance - action.amount
        }
      }
  }
}