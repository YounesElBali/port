using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System.Text.RegularExpressions;
namespace MoskeeBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PrayerTimesController : ControllerBase
    {
        private async Task<JObject> FetchMawaqitData()
        {
            using (var client = new HttpClient())
            {
                var response = await client.GetStringAsync($"https://mawaqit.net/nl/moskee-arrahman-noordwijk");
                var match = Regex.Match(response, @"var confData = (.*?);", RegexOptions.Singleline);

                if (!match.Success)
                {
                    throw new HttpRequestException("Could not find confData in response.");
                }

                var confDataJson = match.Groups[1].Value;
                return JObject.Parse(confDataJson);
            }
        }

        [HttpGet("PrayerTime")]
        public async Task<IActionResult> GetPrayerTimes()
        {
            try
            {
                var confData = await FetchMawaqitData();
                var times = confData["times"].ToObject<List<string>>();
                var shuruq = confData["shuruq"].ToString();

                return Ok(new
                {
                    Fajr =  times[0],
                    Sunrise = shuruq,
                    Dohr = times[1],
                    Asr = times[2],
                    Maghreb = times[3],
                    Isha = times[4]
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }


    }

}