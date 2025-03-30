import { todo_project } from "./todo-project";

export class projectManagement {
    constructor() {
        this.manage = {}; 
    }

    addProject(projectName) {
        this.manage[projectName] = new todo_project(projectName); 
    }

    deleteProject(projectName) {
        delete this.manage[projectName];
    }

    renameProject(oldName, newName) {
        this.manage[newName] = this.manage[oldName];
    }

    addItem(projectName, title, description, dueDate, priority, completed) {
        this.manage[projectName].addItem(title, description, dueDate, priority, completed);
    }

    deleteItem(projectName, id) {
        this.manage[projectName].deleteItem(id);
    }

    updateItem(projectName, id) {
        this.manage[projectName].updateItem(title, description, dueDate, priority, completed);
    }
}