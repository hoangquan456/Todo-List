export class todo_items {
    constructor(title, description, dueDate, priority) {
        this.title = title; 
        this.description = description; 
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
        this.id = crypto.randomUUID();
    }

    change_title(newTitle) {
        oldTitle = this.title;
        this.title = newTitle;
        return oldTitle; 
    }

    change_description(newDescription) {
        oldDescription = this.description;
        this.description = newDescription;
        return oldDescription; 
    }

    change_priority(newPriority) {
        oldPriority = this.priority;
        this.priority = newPriority;
        return oldPriority; 
    }

    change_completed() {
        if (arguments.length == 0) 
            this.completed = !this.completed;
        else this.completed = arguments[0];
    }
}