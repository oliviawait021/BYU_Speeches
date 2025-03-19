using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BYUSpeechesApp.Data;

public class SavedSpeeches
{
    [Key] public int SaveId { get; set; }
    
    public int UserId { get; set; }
    [ForeignKey("UserId")]
    public User User { get; set; }
    
    [Required]
    public int SpeechId { get; set; }
    [ForeignKey("SpeechId")]
    public SpeechInfo SpeechInfo { get; set; }
    
    public string? SpeechTitle { get; set; }
    public string? Status { get; set; }
}