using BYUSpeechesApp.Data;
using Microsoft.AspNetCore.Mvc;

namespace BYUSpeechesApp.Controllers;

[Route("[controller]")]
[ApiController]
public class SpeechController : ControllerBase
{
    private SpeechDbContext _speechContext;
    
    public SpeechController(SpeechDbContext temp)
    {
        _speechContext = temp;
    }
    
    [HttpGet(Name = "GetSpeechInfo")]
    public IEnumerable<SpeechInfo> Get()
    {
        var speechList = _speechContext.SpeechInfos
            .ToList();

        return (speechList);
    }
}