using System;

namespace badminton_venue.Model
{
    public class VenueTime
    {
        public string VenueId { get; set; }

        public User User { get; set; }

        public string Date { get; set; }

        public Tuple<int, int> FromToTime { get; set; }

        public Fee Fee { get; set; }
    }
}
