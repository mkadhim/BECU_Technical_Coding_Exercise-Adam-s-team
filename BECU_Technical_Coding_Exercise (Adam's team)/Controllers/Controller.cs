using BECU_Technical_Coding_Exercise__Adam_s_team_;

using Microsoft.AspNetCore.Mvc;

[ApiController]


[Route("api/[controller]")]
public class TasksController : ControllerBase
{
    private static List<TaskItem> Tasks = new List<TaskItem>
    {
        new TaskItem { Id = 1, Name = "Buy groceries", Status = "pending" },
        new TaskItem { Id = 2, Name = "Complete project", Status = "completed" },
        new TaskItem { Id = 3, Name = "Pay bills", Status = "pending" }
    };

    [HttpGet]
    public IActionResult GetTasks()
    {
        return Ok(Tasks);
    }

    [HttpPut("{id}")]
    public IActionResult UpdateTaskStatus(int id, [FromBody] TaskItem updatedTask)
    {
        var task = Tasks.FirstOrDefault(t => t.Id == id);
        if (task == null) return NotFound();

        task.Status = updatedTask.Status;
        return NoContent();
    }
}

public class TaskItem
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Status { get; set; }
}


