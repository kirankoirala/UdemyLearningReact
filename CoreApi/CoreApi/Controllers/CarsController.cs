using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;

namespace CoreApi.Controllers
{
    [Produces("application/json")]
    [Route("api/Cars")]
    public class CarsController : Controller
    {
        // GET: api/Cars
        [HttpGet]
        public JsonResult Get()
        {
            var result = Json(new[] { new car { Name = "BMW" }, new car { Name = "Acura" } });
            result.ContentType = "application/json";
            return result;
        }

        // GET: api/Cars/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return id==1?"BMW":id==2?"Acura":"Invalid Id";
        }
        
        // POST: api/Cars
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }
        
        // PUT: api/Cars/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }

    public class car
    {
        public string Name { get; set; }
    }
}
