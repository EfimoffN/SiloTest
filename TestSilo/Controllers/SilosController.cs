using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using Microsoft.AspNetCore.Mvc;
using Remotion.Linq.Parsing.ExpressionVisitors.MemberBindings;
using TestSilo.Models;

namespace TestSilo.Controllers
{
    [Route("api/silos")]
    public class SilosController: Controller
    {
        SiloDBContext db;

        public SilosController(SiloDBContext context)
        {
            db = context;
        }
        [HttpGet]
        public IEnumerable<Silo>  Get()
        {
            var t = db.Silo.ToList();
            return db.Silo.ToList();
        }


        [HttpGet("{id}")]
        public Silo Get(int id)
        {
            Silo silos = db.Silo.FirstOrDefault(x => x.Id == id);
            return silos;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Silo silo)
        {
            if (ModelState.IsValid)
            {
                db.Silo.Add(silo);
                db.SaveChanges();
                return Ok(silo);
            }

            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Silo silo)
        {
            if (ModelState.IsValid)
            {
                db.Update(silo);
                db.SaveChanges();
                return Ok(silo);
            }

            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Silo silo = db.Silo.FirstOrDefault(x => x.Id == id);
            if (silo != null)
            {
                db.Silo.Remove(silo);
                db.SaveChanges();
            }

            return Ok(silo);
        }
    }

}
