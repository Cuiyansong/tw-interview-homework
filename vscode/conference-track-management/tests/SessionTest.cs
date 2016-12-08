using Xunit;
using conference_track_management.src;

namespace conference_track_management.tests
{
    public class SessionTest
    {
        [Fact]
        public void InitSession()
        {
            Assert.NotNull(new Session(""));
        }

        [Fact]
        public void MorningSession()
        {
        //Given
        var session = new Session("Morning");
        
        //When
        var name = session.Name;
        
        //Then
        Assert.Equal(name, "Morning");
        }

        [Fact]
        public void AfternoonSession()
        {
        //Given
        var session = new Session("Afternoon");
        
        //When
        var name = session.Name;
        
        //Then
        Assert.Equal(name, "Afternoon");
        }
    }
}