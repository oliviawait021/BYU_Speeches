using BYUSpeechesApp.Data;
using Microsoft.AspNetCore.Mvc;

namespace BYUSpeechesApp.Controllers;

[Route("[controller]")]
[ApiController]
public class SpeechController : ControllerBase
{
    private readonly SpeechDbContext _speechContext;

    public SpeechController(SpeechDbContext context)
    {
        _speechContext = context;
    }

    // GET: api/speech
    [HttpGet]
    public IActionResult GetAllSpeeches()
    {
        var speeches = _speechContext.SpeechInfos
            .OrderBy(s => s.ScheduleDate)
            .ToList();

        return Ok(speeches);
    }
}
