export const addColor = (color) => ({
    type: 'ADD_COLOR',
    payload: color,
  });
  
  export const removeColor = (color) => ({
    type: 'REMOVE_COLOR',
    payload: color,
  });