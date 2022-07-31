export interface ResponseFuncs {
    GET?: Function
    POST?: Function
    PUT?: Function
    DELETE?: Function
  }
  
  // Interface to define our Todo model on the frontend
  export interface Todo {
    _id?: number
    item: string
    completed: boolean
  }
  export interface User {
    _id?: number
    name: string
    email:string
    phone:string
    blood_group:string
    hash:string
    verified:boolean
  }