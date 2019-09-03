using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Encodings.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace monday.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ApiController : Controller
    {
        public string Index()
        {
            return "This is my default action...";
        }

        public string Example()
        {
            return "This is another action";
        }
    }
}
