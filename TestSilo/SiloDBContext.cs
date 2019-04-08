using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace TestSilo
{
    public partial class SiloDBContext : DbContext
    {
        public SiloDBContext()
        {
        }

        public SiloDBContext(DbContextOptions<SiloDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Silo> Silo { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=DESKTOP-MB2FKUT\\SQLEXPRESS;Database=SiloDB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Silo>(entity =>
            {
                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasMaxLength(30);
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.Property(e => e.UserName).HasMaxLength(250);
            });
        }
    }
}
