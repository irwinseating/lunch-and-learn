using System.Text.Json.Serialization;

namespace PepperApi
{
    public class Pepper
    {
        [JsonPropertyName("name")]

        public string Name { get; set; }

        [JsonPropertyName("species")]

        public string Species { get; set; }

        [JsonPropertyName("heat")]

        public string Heat { get; set; }

        [JsonPropertyName("region")]

        public string Region { get; set; }

        [JsonPropertyName("origin")]

        public string? Origin { get; set; }

        [JsonPropertyName("min_shu")]
        public decimal? MinShu { get; set; }

        [JsonPropertyName("max_shu")]
        public decimal? MaxShu { get; set; }

        [JsonPropertyName("min_jrp")]
        public decimal? MinJrp { get; set; }

        [JsonPropertyName("max_jrp")]
        public decimal MaxJrp { get; set; }

        [JsonPropertyName("detail_link")]

        public string DetailLink { get; set; }

        [JsonPropertyName("source_link")]

        public string SourceLink { get; set; }

        [JsonPropertyName("source_name")]
        public string SourceName { get; set; }
    }
}