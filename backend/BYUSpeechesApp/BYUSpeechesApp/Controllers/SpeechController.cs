using BYUSpeechesApp.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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

    // GET: speech/default
    [HttpGet("default")]
    public async Task<IActionResult> GetDefaultSpeech()
    {
        var speechInfo = await _speechContext.SpeechInfos
            .Where(si => si.SpeechId == 1)
            .FirstOrDefaultAsync();

        var speechContent = await _speechContext.SpeechContents
            .Where(sc => sc.SpeechId == 1)
            .FirstOrDefaultAsync();

        if (speechInfo == null || speechContent == null)
        {
            return NotFound();
        }

        return Ok(new
        {
            SpeechInfo = speechInfo,
            SpeechContent = speechContent
        });
    }
}

