namespace RetainingWalls.API.Dtos
{
    public class WallForUpdateDto
    {
        // map request body to this Dto
        public int Id {get; set;}
        public double Latitude {get; set;}
        public double Longitude {get; set;}
        public string Location {get; set;}
        public double MaxHeight {get; set;}
        public double MinHeight {get; set;}
        public double Length {get; set;}
    }
}