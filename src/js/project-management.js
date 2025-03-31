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
        this.deleteProject(oldName);
    }

    addItem(projectName, title, description, dueDate, priority, completed) {
        this.manage[projectName].addItem(title, description, dueDate, priority, completed);
    }

    deleteItem(projectName, id) {
        this.manage[projectName].deleteItem(id);
    }

    updateItem(projectName, id, title, description, dueDate, priority, completed) {
        this.manage[projectName].updateItem(id, title, description, dueDate, priority, completed);
    }

    traverse(projectName, callback) {
        for (const [key, project] of Object.entries(this.manage)) {
            if (key === projectName || projectName == "AlL TasK") {
                project.arr.forEach((item) => {
                    callback(item, key); // Call the provided function for each item
                });
            }
        }
    }
}