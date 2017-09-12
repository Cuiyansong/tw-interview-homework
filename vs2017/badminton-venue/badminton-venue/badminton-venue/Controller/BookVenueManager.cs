using System.Collections.Generic;
using badminton_venue.Model;

namespace badminton_venue.Controller
{
    public class BookVenueManager
    {
        public List<Venue> Venues { get; set; }

        public BookVenueManager()
        {
            Venues = new List<Venue>(4);
        }

        public void Book(VenueTime order)
        {
            Venue existingVenue = Venues.Find(v => v.Id == order.VenueId);
            if (existingVenue != null)
            {
                existingVenue.VenueTimes.Add(order);
            }
            else
            {
                Venues.Add(new Venue { Id = order.VenueId, VenueTimes = new List<VenueTime> { order } });
            }
        }
    }
}
