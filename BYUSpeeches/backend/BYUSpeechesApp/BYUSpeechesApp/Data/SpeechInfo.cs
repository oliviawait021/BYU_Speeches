using System.ComponentModel.DataAnnotations;

namespace BYUSpeechesApp.Data;

public class SpeechInfo
{
    [Key]
    public int SpeechId { get; set; }
    [Required]
    public string Speaker { get; set; }
    public string? SpeakerBio { get; set; }
    [Required]
    public string SpeechTitle { get; set; }
    public TimeSpan? DurationOfSpeech { get; set; }
    public DateTime? ScheduleDate { get; set; }
    public DateTime? DateSpeechGiven { get; set; }
    public string? ImageUrl { get; set; }
}