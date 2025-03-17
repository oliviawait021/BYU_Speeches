using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BYUSpeechesApp.Data;

public class SpeechNotes
{
    [Key]
    public int NoteId { get; set; }
    [Required]
    public int UserId { get; set; }
    [ForeignKey("UserId")]
    public User User { get; set; }
    [Required]
    public int SpeechId { get; set; }
    [ForeignKey("SpeechId")]
    public SpeechInfo SpeechInfo { get; set; }
    public string? NoteText { get; set; }
    public DateTime? CreatedAt { get; set; } = DateTime.Now;
}