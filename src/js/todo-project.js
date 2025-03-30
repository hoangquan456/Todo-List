import { todo_items } from "./todo-item";

export class todo_project {
    constructor(name) {
        this.name = name; 
        this.arr = []; 
    }

    addItem(title, description, dueDate, priority, completed) {
        this.arr.push(new todo_items(title, description, dueDate, priority, completed)); 
    }

    deleteItem(id) {
        console.log(id);
        
        this.arr = this.arr.filter( (item) => 
            item.id != id)
    }

    updateItem(id, title, description, dueDate, priority, completed) {
        this.arr.forEach( (item) => {
            if (item.id == id) {
                item.title = title; 
                item.description = description; 
                item.dueDate = dueDate;
                item.priority = priority;
                item.completed = completed;
            }
        });
    }
}