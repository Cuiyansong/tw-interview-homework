using Xunit;
using conference_track_management.src;

namespace conference_track_management.tests
{
    public class TrackTest
    {
        [Fact]
        public void InitTrack()
        {
            Assert.NotNull(new Track());
        }
    }
}