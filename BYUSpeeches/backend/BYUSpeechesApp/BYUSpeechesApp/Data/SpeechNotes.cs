using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BYUSpeechesApp.Data;

public class SpeechNotes
{
    [Key]
    public int NoteId { get; set; }
    [Required]
    [ForeignKey("UserId")]
    public int UserId { get; set; }
    public User User { get; set; }
    
    [Required]
    [ForeignKey("SpeechId")]
    public int SpeechId { get; set; }
    public SpeechInfo SpeechInfo { get; set; }
    
    public string? NoteText { get; set; }
    public DateTime? CreatedAt { get; set; } = DateTime.Now;
}