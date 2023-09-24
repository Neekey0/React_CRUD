using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace finalPCS.Models
{
    public class Employee
    {
        
        [Key]
        public int Employee_id { get; set; }
        public string Emp_name{ get; set; }
        public string DOB{ get; set; }
        public string Gender { get; set; }
        public float Salary { get; set; }
        public ICollection<Emp_Qualification>? Emp_Qualifications { get; set; }
    }
}
