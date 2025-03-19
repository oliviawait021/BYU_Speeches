using System.ComponentModel.DataAnnotations;

namespace BYUSpeechesApp.Data;

public class User
{
    [Key]
    public int UserId { get; set; }
    [Required]
    public string FirstName { get; set; }
    [Required]
    public string LastName { get; set; }
    [Required]
    public DateTime DateOfBirth { get; set; }
    [Required]
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    [Required]
    public string Email { get; set; }
    [Required]
    public string Password { get; set; }
}