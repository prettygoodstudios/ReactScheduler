import {FETCH_COURSES,TOGGLE_ENROLLED} from "./types";

export function toggleEnrolled(id){
  return{
    type: TOGGLE_ENROLLED,
    payload: id
  }
}

export function fetchCourses(){
  return{
    type: FETCH_COURSES,
    payload: [
      {
        id: 0,
        title: "Up and Running with Redis",
        description: "In this course you will learn how to work with Redis.",
        enrolled: false
      },
      {
        id: 1,
        title: "HTML/CSS",
        description: "How to format and build web apps.",
        enrolled: false
      }
      ,
      {
        id: 2,
        title: "Bootstrap",
        description: "How to format and build web apps.",
        enrolled: false
      }
    ]
  }
}
