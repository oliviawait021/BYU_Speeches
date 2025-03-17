using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BYUSpeechesApp.Data;

public class SavedSpeeches
{
    [Key] public int SaveId { get; set; }
    [ForeignKey("UserId")]
    public int UserId { get; set; }
    public User User { get; set; }
    
    [Required]
    [ForeignKey("SpeechId")]
    public int SpeechId { get; set; }
    public SpeechInfo SpeechInfo { get; set; }
    public string? SpeechTitle { get; set; }
    public string? Status { get; set; }
}