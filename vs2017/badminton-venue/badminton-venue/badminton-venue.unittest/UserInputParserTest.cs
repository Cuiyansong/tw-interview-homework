using System;
using Xunit;

namespace badminton_venue.unittest
{
    public class UserInputParserTest
    {
        readonly InputParser inputParser;

        public UserInputParserTest()
        {
            inputParser = new InputParser();
        }

        [Theory]
        [InlineData("abcdefghijklmnopqrst1234567890")]
        [InlineData("U001 2016-06-02 22:00~22:00 A")]
        public void when_user_input_illegal_content(string userInputString)
        {
            try
            {
                inputParser.Parse(userInputString);
                Assert.Throws<Exception>(() => { });
            }
            catch (Exception ex)
            {
                Assert.Equal("Error: the booking is invalid!", ex.Message);
            }
        }

        [Fact]
        public void when_user_input_legal_content()
        {
            var userInputString = "U002 2017-08-01 19:00~22:00 A";

            var result = inputParser.Parse(userInputString);

            Assert.NotNull(result);
            Assert.Equal("U002", result.User.Id);
            Assert.Equal("2017-08-01", result.Date);
            Assert.Equal(new Tuple<int, int>(19, 22), result.FromToTime);
            Assert.Equal("A", result.VenueId);
        }
    }
}
