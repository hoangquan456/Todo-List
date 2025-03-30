import { projectManagement } from "./project-management";

let manage = new projectManagement(); 
manage.addProject("default"); 
manage.addItem("default", true, true, true, true, true);

manage.renameProject("default", "test");
// manage.deleteProject("default");

console.log(manage);
