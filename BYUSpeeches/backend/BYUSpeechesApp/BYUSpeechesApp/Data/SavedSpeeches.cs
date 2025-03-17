using System.ComponentModel.DataAnnotations;

namespace BYUSpeechesApp.Data;

public class SavedSpeeches
{
    [Key] public int SaveId { get; set; }
    [Required]
    public int SpeechId { get; set; }
    [Required]
    public int UserId { get; set; }
    public string? SpeechTitle { get; set; }
    public string? Status { get; set; }
}