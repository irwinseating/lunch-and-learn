using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace PepperApi.Controllers
{
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
        [ResponseCache(Location = ResponseCacheLocation.Any, Duration = 3600)]
        public async Task<IActionResult> Get()
        {
            using (StreamReader r = new StreamReader("data/peppers.json"))
            {
                var json = r.ReadToEnd();
                var pepperResponse = JsonConvert.DeserializeObject<PepperResponse>(json);
                return Ok(pepperResponse.Peppers.Take(100));
            }
        }
    }
}