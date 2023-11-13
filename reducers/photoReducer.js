export const photoReducer = (initialState = [], action) => {
    switch (action.type) {
      case '[PHOTO] Get All':
        return action.payload;
      case '[PHOTO] Like/dislike Photo':
        return initialState.map(photo =>
          photo.id === action.payload
            ? { ...photo, liked: !photo.liked }
            : photo
        );
      default:
        return initialState;
    }
};