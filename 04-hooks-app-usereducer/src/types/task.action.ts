export type TaskAction =
    | { type: "ADD_TODO",payload:string }
    | { type: "TOGGLE_TODO",payload:number }
    | { type: "DELETE_TODO",payload:number }
    ;
