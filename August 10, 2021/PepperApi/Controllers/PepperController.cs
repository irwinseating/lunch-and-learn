using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;

namespace PepperApi.Controllers
{
    [EnableCors("CorsPolicy")]
    [ApiController]
    [Route("[controller]")]
    public class PepperController : ControllerBase
    {
        private readonly ILogger<PepperController> _logger;

        public PepperController(ILogger<PepperController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        //[ResponseCache(Location = ResponseCacheLocation.Any, Duration = 3600)]
        public async Task<IActionResult> Get(int page = 1, int pageSize = 20)
        {
            using (StreamReader r = new StreamReader("data/peppers.json"))
            {
                var json = r.ReadToEnd();
                var pepperResponse = JsonConvert.DeserializeObject<PepperResponse>(json);

                var totalResults = pepperResponse.Peppers.Count();
                var totalPages = pepperResponse.Peppers.Count() / pageSize;
                var currentPage = pepperResponse.Peppers.Skip((page - 1) * pageSize).Take(pageSize);
                return Ok(new
                {
                    totalResults,
                    totalPages,
                    items = currentPage
                });
            }
        }


        [HttpDelete]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(true);
        }

        [HttpPut]
        public async Task<IActionResult> Update(Pepper pepper)
        {
            return Ok(pepper);
        }

        [HttpPost]
        public async Task<IActionResult> Create(Pepper pepper)
        {
            return Ok(pepper);
        }
    }
}