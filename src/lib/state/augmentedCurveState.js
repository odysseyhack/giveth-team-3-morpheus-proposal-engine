/**
 * Created by will on 11/04/19.
 */
export const initialState = {
  curveName: "Will's Crowdfunding Campaign",
  tokenPrice: 10,
  tokenSupply: 20000,
}

export const curveActions = {
  buyTokens: "BUY"
};

export function reducer(state, action) {
  switch (action.type) {
    case curveActions.buyTokens:
      return {
        ...state,
        tokenSupply: (state.tokenSupply + action.amount),
        tokenPrice: calculateNewPrice(state, action.amount)
      }
  }
}

function calculateNewPrice(curve, amount) {
  // TODO some maths
  return curve.tokenPrice + (amount * 0.1);
}