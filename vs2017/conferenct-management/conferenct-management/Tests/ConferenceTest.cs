using Xunit;
using conference_track_management.src;

namespace conference_track_management.tests
{
    public class ConferenceTest
    {
        [Fact]
        public void CreateConf()
        {
            //Given
            var conf = new Conference();
        
            //Then
            Assert.NotNull(conf);
        }      
    }
}