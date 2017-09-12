using System;
using System.Collections.Generic;
using badminton_venue.Model;

namespace badminton_venue.Controller
{
    public class SettlementManager
    {
        readonly Dictionary<Tuple<DayOfWeek, Tuple<int, int>>, int> UnitFeeDict =
            new Dictionary<Tuple<DayOfWeek, Tuple<int, int>>, int>
            {
                {new Tuple<DayOfWeek, Tuple<int, int>>(DayOfWeek.Monday, new Tuple<int, int>(9, 12)), 30},
                {new Tuple<DayOfWeek, Tuple<int, int>>(DayOfWeek.Monday, new Tuple<int, int>(12, 18)), 50},
                {new Tuple<DayOfWeek, Tuple<int, int>>(DayOfWeek.Monday, new Tuple<int, int>(18, 20)), 80},
                {new Tuple<DayOfWeek, Tuple<int, int>>(DayOfWeek.Monday, new Tuple<int, int>(20, 22)), 60},
                {new Tuple<DayOfWeek, Tuple<int, int>>(DayOfWeek.Tuesday, new Tuple<int, int>(9, 12)), 30},
                {new Tuple<DayOfWeek, Tuple<int, int>>(DayOfWeek.Tuesday, new Tuple<int, int>(12, 18)), 50},
                {new Tuple<DayOfWeek, Tuple<int, int>>(DayOfWeek.Tuesday, new Tuple<int, int>(18, 20)), 80},
                {new Tuple<DayOfWeek, Tuple<int, int>>(DayOfWeek.Tuesday, new Tuple<int, int>(20, 22)), 60},
                {new Tuple<DayOfWeek, Tuple<int, int>>(DayOfWeek.Wednesday, new Tuple<int, int>(9, 12)), 30},
                {new Tuple<DayOfWeek, Tuple<int, int>>(DayOfWeek.Wednesday, new Tuple<int, int>(12, 18)), 50},
                {new Tuple<DayOfWeek, Tuple<int, int>>(DayOfWeek.Wednesday, new Tuple<int, int>(18, 20)), 80},
                {new Tuple<DayOfWeek, Tuple<int, int>>(DayOfWeek.Wednesday, new Tuple<int, int>(20, 22)), 60},
                {new Tuple<DayOfWeek, Tuple<int, int>>(DayOfWeek.Thursday, new Tuple<int, int>(9, 12)), 30},
                {new Tuple<DayOfWeek, Tuple<int, int>>(DayOfWeek.Thursday, new Tuple<int, int>(12, 18)), 50},
                {new Tuple<DayOfWeek, Tuple<int, int>>(DayOfWeek.Thursday, new Tuple<int, int>(18, 20)), 80},
                {new Tuple<DayOfWeek, Tuple<int, int>>(DayOfWeek.Thursday, new Tuple<int, int>(20, 22)), 60},
                {new Tuple<DayOfWeek, Tuple<int, int>>(DayOfWeek.Friday, new Tuple<int, int>(9, 12)), 30},
                {new Tuple<DayOfWeek, Tuple<int, int>>(DayOfWeek.Friday, new Tuple<int, int>(12, 18)), 50},
                {new Tuple<DayOfWeek, Tuple<int, int>>(DayOfWeek.Friday, new Tuple<int, int>(18, 20)), 80},
                {new Tuple<DayOfWeek, Tuple<int, int>>(DayOfWeek.Friday, new Tuple<int, int>(20, 22)), 60},
                {new Tuple<DayOfWeek, Tuple<int, int>>(DayOfWeek.Saturday, new Tuple<int, int>(9, 12)), 40},
                {new Tuple<DayOfWeek, Tuple<int, int>>(DayOfWeek.Saturday, new Tuple<int, int>(12, 18)), 50},
                {new Tuple<DayOfWeek, Tuple<int, int>>(DayOfWeek.Saturday, new Tuple<int, int>(18, 22)), 60},
                {new Tuple<DayOfWeek, Tuple<int, int>>(DayOfWeek.Sunday, new Tuple<int, int>(9, 12)), 40},
                {new Tuple<DayOfWeek, Tuple<int, int>>(DayOfWeek.Sunday, new Tuple<int, int>(12, 18)), 50},
                {new Tuple<DayOfWeek, Tuple<int, int>>(DayOfWeek.Sunday, new Tuple<int, int>(18, 22)), 60},
            };


        public List<Venue> CalcFee(List<Venue> venues)
        {
            foreach (var venue in venues)
            {
                venue.VenueTimes.ForEach(venueTime => venueTime.Fee = new Fee()
                {
                    PenalSum = GetFeeByDate(venueTime.Date, venueTime.FromToTime)
                });
            }
            return venues;
        }

        int GetFeeByDate(string date, Tuple<int, int> timeSpan)
        {
            var orderDate = DateTime.Parse(date);

            var hours = timeSpan.Item2 - timeSpan.Item1;
            return hours*  UnitFeeDict[new Tuple<DayOfWeek, Tuple<int, int>>(orderDate.DayOfWeek, timeSpan)];
        }
    }
}