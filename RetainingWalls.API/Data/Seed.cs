using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualBasic.FileIO;
using RetainingWalls.API.Models;

namespace RetainingWalls.API.Data
{
    public class Seed
    {
        public static void SeedWalls(WallContext context) {
            // if the database is empty
            if (!context.RetainingWalls.Any()) {
                var walls = new List<RetainingWall>();
                TextFieldParser parser = new TextFieldParser("Data\\WallOutput2.csv");
                parser.SetDelimiters(",");

                while (!parser.EndOfData) {
                string[] wall = parser.ReadFields();
                
                if (parser.LineNumber != 2) {
                    double longitude, latitude, length, maxHeight, minHeight;
                    Double.TryParse(wall[4], out longitude);
                    //RetainingWall.Longitude = longitude;
                    Double.TryParse(wall[5], out latitude);
                    //RetainingWall.Latitude = latitude;
                    Double.TryParse(wall[1], out length);
                    Double.TryParse(wall[2], out maxHeight);
                    Double.TryParse(wall[3], out minHeight);

                    var retainingWall = new RetainingWall(){
                        Location = wall[0],
                        Length = length,
                        MaxHeight = maxHeight,
                        MinHeight = minHeight,
                        Longitude = longitude,
                        Latitude = latitude
                        
                    };

                    walls.Add(retainingWall);

                }

            }

                foreach (var wall in walls) 
                {
                    context.RetainingWalls.Add(wall);
                }

                context.SaveChanges();


            }
        }
    }
}