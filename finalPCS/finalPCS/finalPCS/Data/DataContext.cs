using finalPCS.Models;
using Microsoft.EntityFrameworkCore;

namespace finalPCS.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Qualification_List> Qualification_Lists { get; set; }
        public DbSet<Emp_Qualification> Emp_Qualifications { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Emp_Qualification>()
                .HasKey(eq => new { eq.Employee_id, eq.Q_id });

            modelBuilder.Entity<Emp_Qualification>()
                .HasOne(p => p.Employee)
                .WithMany(eq => eq.Emp_Qualifications)
                .HasForeignKey(c => c.Employee_id);

            modelBuilder.Entity<Emp_Qualification>()
               .HasOne(p => p.Qualification_List)
               .WithMany(eq => eq.Emp_Qualifications)
               .HasForeignKey(c => c.Q_id);

        }


    }

}
