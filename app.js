
const tasks = [
  { id: 1, title: "Complete Git notes", completed: false },
  { id: 2, title: "Prepare DevOps assignment", completed: true }
];

function showTasks() {
  console.log("Student Task Tracker");

  tasks.forEach(task => {
    console.log(
      `${task.id}. ${task.title} - ${
        task.completed ? "Completed" : "Pending"
      }`
    );
  });
}

showTasks();
