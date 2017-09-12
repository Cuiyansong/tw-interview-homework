using System.Collections.Generic;

namespace badminton_venue.Model
{
    public class Venue
    {
        public List<VenueTime> VenueTimes = new List<VenueTime>();

        public string Id { get; set; }
    }
}
