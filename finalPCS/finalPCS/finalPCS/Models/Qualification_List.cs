using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace finalPCS.Models
{
    public class Qualification_List
    {
   
        [Key]
        public int Q_id { get; set; }
        public string  Q_Name{ get; set; }
        public ICollection<Emp_Qualification> Emp_Qualifications { get; set; }
    }
}
