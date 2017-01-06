namespace conference_track_management.src
{
    public class Session
    {
        public string Name { get; private set; }

        public Session(string name) {
            this.Name = name;
        }
    }
}