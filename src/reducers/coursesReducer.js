import {FETCH_COURSES, TOGGLE_ENROLLED} from "../actions/types";
export default function(state = [], action){
  switch(action.type){
    case FETCH_COURSES:
      return [...state, ...action.payload];
    case TOGGLE_ENROLLED:
      const newCourses = state.map((c) => {
        if (c.id == action.payload){
          c.enrolled = !c.enrolled;
          //console.log(`ID:${c.id}, ENROLLED: ${c.enrolled}`);
        }
        return c;
      });
      return [
        ...newCourses
      ];
      return state;
    default:
      return state;
  }
}
