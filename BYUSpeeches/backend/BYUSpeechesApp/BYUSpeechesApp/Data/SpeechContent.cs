using System.ComponentModel.DataAnnotations;

namespace BYUSpeechesApp.Data;

public class SpeechContent
{
    [Key]
    public int SpeechId { get; set; }
    public string? SpeechText { get; set; }
    public string? SpeechHighlightText { get; set; }
    public string? AudioUrl { get; set; }
    public string? VideoUrl { get; set; }
}