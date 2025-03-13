// src/middleware/errorMiddleware.js
export const errorMiddleware = ({ dispatch }) => (next) => async (action) => {
    if (typeof action === "function") {
        try {
            await action(dispatch);
        } catch (error) {
            console.error("Redux Thunk Error:", error);
        }
    } else {
        return next(action);
    }
};
