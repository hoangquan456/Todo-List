import { projectManagement } from "./project-management";
import { uiHandler } from "./ui-handler";
import "../styles.css";

let manage = new projectManagement(); 
manage.addProject("Default"); 
manage.addProject("Test"); 
// manage.addItem("Default", 123, true, true, true, true);
// manage.addItem("Test", 456, true, true, true, true);

const ui = new uiHandler(manage); 

// manage.deleteProject("default");

console.log(manage);
