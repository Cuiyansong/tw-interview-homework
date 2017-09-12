using badminton_venue.Controller;
using badminton_venue.View;
using Xunit;

namespace badminton_venue.unittest
{
    public class SummaryViewTest
    {
        readonly SummaryView summaryView;
        readonly BookVenueManager bookVenueManager;
        readonly InputParser inputParser;

        public SummaryViewTest()
        {
            summaryView = new SummaryView();
            bookVenueManager = new BookVenueManager();
            inputParser = new InputParser();
        }

        [Fact]
        public void when_user_book_one_venue_time()
        {
            var userInput = "U002 2017-08-01 19:00~22:00 A";

            bookVenueManager.Book(inputParser.Parse(userInput));
            var output = summaryView.PrintSummary(bookVenueManager);

            Assert.Equal("", output);
        }
    }
}
