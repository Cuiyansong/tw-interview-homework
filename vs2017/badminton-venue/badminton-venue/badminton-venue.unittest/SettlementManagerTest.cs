using System;
using System.Collections.Generic;
using badminton_venue.Controller;
using badminton_venue.Model;
using Xunit;

namespace badminton_venue.unittest
{
    public class SettlementManagerTest
    {
        readonly BookVenueManager bookManager;
        readonly SettlementManager settleManager;

        public SettlementManagerTest()
        {
            settleManager = new SettlementManager();
            bookManager = new BookVenueManager();
        }

        [Fact]
        public void when_calculate_one_venue_time_fee()
        {
            // U123 2016-06-02 20:00~22:00 A
            BuildVenueInfo("2016-06-02", 20, 22);

            List<Venue> result = settleManager.CalcFee(bookManager.Venues);

            Assert.Equal(120, result[0].VenueTimes[0].Fee.PenalSum);
        }

        [Theory]
        [InlineData("2017-09-11")]
        [InlineData("2017-09-12")]
        [InlineData("2017-09-13")]
        [InlineData("2017-09-14")]
        [InlineData("2017-09-15")]
        public void when_book_venue_on_every_working_days_and_with_time_from_20_to_22(string today)
        {
            BuildVenueInfo(today, 20, 22);

            List<Venue> result = settleManager.CalcFee(bookManager.Venues);

            Assert.Equal(120, result[0].VenueTimes[0].Fee.PenalSum);
        }

        [Theory]
        [InlineData("2017-09-16")]
        [InlineData("2017-09-17")]
        public void when_book_venue_on_weekend_and_with_time_from_9_to_10(string today)
        {
            BuildVenueInfo(today, 9, 12);

            List<Venue> result = settleManager.CalcFee(bookManager.Venues);

            Assert.Equal(120, result[0].VenueTimes[0].Fee.PenalSum);
        }

        [Theory]
        [InlineData(9, 12, 90)]
        [InlineData(12, 18, 300)]
        [InlineData(18, 20, 160)]
        [InlineData(20, 22, 120)]
        public void when_book_venue_on_working_day_with_different_time(int from, int to, int totalFee)
        {
            BuildVenueInfo("2017-09-15", from, to);

            List<Venue> result = settleManager.CalcFee(bookManager.Venues);

            Assert.Equal(totalFee, result[0].VenueTimes[0].Fee.PenalSum);
        }

        void BuildVenueInfo(string date, int begin, int end)
        {
            var order = new VenueTime
            {
                User = new User { Id = "U123" },
                Date = date,
                FromToTime = new Tuple<int, int>(begin, end),
                VenueId = "A"
            };
            bookManager.Venues.Add(new Venue()
            {
                VenueTimes = new List<VenueTime> { order }
            });
        }
    }
}
