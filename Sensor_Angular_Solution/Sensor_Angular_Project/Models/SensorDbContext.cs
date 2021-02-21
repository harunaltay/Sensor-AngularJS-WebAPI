using System.Data.Entity;

namespace Sensor_Angular_Project.Models
{
    public class SensorDbContext : DbContext
    {
        public DbSet<Sensor> Sensors { get; set; }
    }
}