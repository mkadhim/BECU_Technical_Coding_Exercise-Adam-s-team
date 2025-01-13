using BECU_Technical_Coding_Exercise__Adam_s_team_;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class TasksController : ControllerBase
{
    private static List<TaskItem> tasks = new List<TaskItem>
    {
        new TaskItem { Id = 1, Name = "Sample Task", Completed = false }
    };

    [HttpGet]
    public ActionResult<IEnumerable<TaskItem>> GetTasks()
    {
        return Ok(tasks);
    }

    [HttpPut("{id}")]
    public ActionResult UpdateTask(int id)
    {
        var task = tasks.FirstOrDefault(t => t.Id == id);
        if (task == null) return NotFound();

        task.Completed = !task.Completed;
        return NoContent();
    }
}