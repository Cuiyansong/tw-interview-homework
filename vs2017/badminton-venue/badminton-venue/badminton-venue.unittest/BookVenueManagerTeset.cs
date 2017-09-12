using System;
using badminton_venue.Controller;
using badminton_venue.Model;
using Xunit;

namespace badminton_venue.unittest
{
    public class BookVenueManagerTeset
    {
        readonly BookVenueManager manager;

        public BookVenueManagerTeset()
        {
            manager = new BookVenueManager();
        }

        [Fact]
        public void when_user_book_one_venue_time()
        {
            var order = new VenueTime()
            {
                User = new User { Id = "001" },
                Date = "2017-09-10",
                FromToTime = new Tuple<int, int>(10, 12),
                VenueId = "A"
            };

            manager.Book(order);

            Assert.Equal(1, manager.Venues.Count);
            Assert.Equal(order, manager.Venues[0].VenueTimes[0]);
        }

        [Fact]
        public void when_user_book_two_venue_time()
        {
            var firstOrder = new VenueTime()
            {
                User = new User { Id = "001" },
                Date = "2017-09-10",
                FromToTime = new Tuple<int, int>(10, 12),
                VenueId = "A"
            };
            var secondOrder = new VenueTime()
            {
                User = new User { Id = "001" },
                Date = "2017-09-10",
                FromToTime = new Tuple<int, int>(10, 12),
                VenueId = "B"
            };

            manager.Book(firstOrder);
            manager.Book(secondOrder);

            Assert.Equal(2, manager.Venues.Count);
        }
    }
}
