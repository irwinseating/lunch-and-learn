using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace PepperApi
{
    public class PepperResponse
    {
        [JsonPropertyName("peppers")]

        public IList<Pepper> Peppers { get; set; }

        [JsonPropertyName("source")]

        public string Source { get; set; }

        [JsonPropertyName("contact")]

        public string Contact { get; set; }

        [JsonPropertyName("last_updated")]

        public DateTime LastUpdated { get; set; }
    }
}