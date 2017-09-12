using System;
using System.Linq;
using badminton_venue.Model;

namespace badminton_venue
{
    public class InputParser
    {
        public VenueTime Parse(string userInputString)
        {
            var result = userInputString.Split(null);
            if (result.Length != 4)
            {
                throw new Exception("Error: the booking is invalid!");
            }
            var fromToTimes = result[2].Split('~').Select(t => t.Split(':')[0]).ToList();
            if (fromToTimes[0] == fromToTimes[1])
            {
                throw new Exception("Error: the booking is invalid!");
            }

            return new VenueTime
            {
                User = new User { Id = result[0] },
                Date = result[1],
                FromToTime = new Tuple<int, int>(int.Parse(fromToTimes[0]), int.Parse(fromToTimes[1])),
                VenueId = result[3]
            };
        }
    }
}
