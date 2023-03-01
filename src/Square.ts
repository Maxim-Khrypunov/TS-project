import { Rectangle } from "./Rectangle";
export class Square extends Rectangle
{
    constructor(absolutSize: number)
    {
        super(absolutSize,absolutSize);
    }
}