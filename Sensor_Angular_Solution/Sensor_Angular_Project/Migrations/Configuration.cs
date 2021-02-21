using Sensor_Angular_Project.Models;

namespace Sensor_Angular_Project.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Sensor_Angular_Project.Models.SensorDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(Sensor_Angular_Project.Models.SensorDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data.

            context.Sensors.AddOrUpdate(s => s.SensorName,
                new Sensor { SensorName = "A1", SensorDescription = "Simple one", SensorProductionYear = 2001 },
                new Sensor { SensorName = "B2", SensorDescription = "Cheap one", SensorProductionYear = 2002 },
                new Sensor { SensorName = "C3", SensorDescription = "Expensive one", SensorProductionYear = 2003 },
                new Sensor { SensorName = "D4", SensorDescription = "Complex one", SensorProductionYear = 2004 },
                new Sensor { SensorName = "E5", SensorDescription = "Heavy duty one", SensorProductionYear = 2005 }
            );
        }
    }
}
