using finalPCS.Data;
using finalPCS.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace finalPCS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly DataContext _context;
        public EmployeeController(DataContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<List<Employee>>> Get()
        {


            return Ok(await _context.Employees.ToListAsync());
        }

        [HttpGet]
        [Route("GetEmployee")]
        public async Task<ActionResult<Employee>> Get(int id)
        {
           
           
            var emp = await _context.Employees.Include(x => x.Emp_Qualifications)
                .ThenInclude(y => y.Qualification_List)
                .SingleOrDefaultAsync(m => m.Employee_id == id);
            
            if (emp == null)
            {
                return BadRequest("Employee not found");
            }
            else
            { 
                return Ok(emp);
            }
        }
        [HttpDelete]
        [Route("DeleteEmp")]
        public async Task<ActionResult<Employee>> DeleteEmp(int id)
        {
            var emp = await _context.Employees.Include(x => x.Emp_Qualifications)
                          .ThenInclude(y => y.Qualification_List)
                          .SingleOrDefaultAsync(m => m.Employee_id == id);
            if (emp == null)
            {
                return BadRequest("Employee not found");
            }
            else
            {

                emp.Emp_Qualifications.Clear();
                _context.Employees.Remove(emp);
                _context.SaveChangesAsync();

                return Ok();
            }
            


            ////var demp = await _context.Employees.FindAsync(id);


            ////if (emp == null)
            ////{
            ////    return BadRequest("Employee not found");
            ////}
            ////else
            ////{
            ////    return _context.Employees.Remove(demp);
            ////}
        }
        [HttpGet]
        [Route("GetQual")]
        public async Task<ActionResult<List<Qualification_List>>> GetQual()
        {

            return Ok(await _context.Qualification_Lists.ToListAsync());
        }
 
        [HttpPost]
        [Route("AddEmployee")]
        public async Task<ActionResult<List<Employee>>> AddEmployee(Employee employee)
        {
            _context.Employees.AddAsync(employee);
            await _context.SaveChangesAsync();
            return Ok(await _context.Employees.ToListAsync());
        }
        [HttpPut]
        [Route("UpdateEmployee")]
        public async Task<ActionResult<List<Employee>>> UpdateEmployee(Employee request)
        {

            var emp = await _context.Employees.Include(x => x.Emp_Qualifications)
                .ThenInclude(y => y.Qualification_List)
                .SingleOrDefaultAsync(m => m.Employee_id == request.Employee_id);
                
            
                emp.Emp_Qualifications.Clear();

            var demp = await _context.Employees.FindAsync(request.Employee_id);
                if (demp == null)
                {
                    return BadRequest("Employee not found");
                }
                demp.Emp_name = request.Emp_name;
                demp.DOB = request.DOB;
                demp.Gender = request.Gender;
                demp.Salary = request.Salary;
                demp.Emp_Qualifications = request.Emp_Qualifications;
            

            await _context.SaveChangesAsync();
            return (await _context.Employees.ToListAsync());


        }

    }
}
