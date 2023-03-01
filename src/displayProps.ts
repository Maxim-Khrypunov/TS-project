import { Shape } from "./Shape";
export function displaySquarePerimeter(shape:Shape) 
{
    console.log(`squere of shape ${shape.square()}`);
    console.log(`perimeter of shape ${shape.perimeter()}`);
}