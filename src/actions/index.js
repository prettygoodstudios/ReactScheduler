import {FETCH_COURSES} from "./types";

export function fetchCourses(){
  return{
    type: FETCH_COURSES,
    payload: [
      {
        title: "Up and Running with Redis",
        description: "In this course you will learn how to work with Redis."
      },
      {
        title: "HTML/CSS",
        description: "How to format and build web apps."
      }
      ,
      {
        title: "Bootstrap",
        description: "How to format and build web apps."
      }
    ]
  }
}
