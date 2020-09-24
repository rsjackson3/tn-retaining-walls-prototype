namespace RetainingWalls.API.Models
{
    public class RetainingWall
    {
        // this class will contain the db model for retaining walls
        public int Id {get; set;}
        public double Latitude {get; set;}
        public double Longitude {get; set;}
        public string Location {get; set;}
        public double MaxHeight {get; set;}
        public double MinHeight {get; set;}
        public double Length {get; set;}
        
    }
}