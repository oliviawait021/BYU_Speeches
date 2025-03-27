using Microsoft.EntityFrameworkCore;

namespace BYUSpeechesApp.Data;

public class SpeechDbContext : DbContext
{
    public SpeechDbContext(DbContextOptions<SpeechDbContext> options) : base(options)
    {
    }
    
    public DbSet<User> Users { get; set; }
    public DbSet<SpeechInfo> SpeechInfos { get; set; }
    public DbSet<SpeechContent> SpeechContents { get; set; }
    public DbSet<SpeechNotes> SpeechNotes { get; set; }
    public DbSet<SavedSpeeches> SavedSpeeches { get; set; }
    
}