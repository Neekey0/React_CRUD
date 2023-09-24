using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace finalPCS.Models
{
    public class Emp_Qualification
    {
        public int Employee_id { get; set; }
        
        public int Q_id { get; set; }
        public float Marks { get; set; }
        [JsonIgnore]
        public virtual Employee? Employee { get; set; }
        [JsonIgnore]
        public virtual Qualification_List? Qualification_List { get; set; }
    }
}
