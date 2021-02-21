namespace Sensor_Angular_Project.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Sensors",
                c => new
                    {
                        SensorId = c.Int(nullable: false, identity: true),
                        SensorName = c.String(),
                        SensorDescription = c.String(),
                        SensorProductionYear = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.SensorId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Sensors");
        }
    }
}
