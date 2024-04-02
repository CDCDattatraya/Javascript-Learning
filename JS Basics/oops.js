class A
{
        show1(x,y,z)
        {
                z=x+y;
                document.write(z+"<br>");

        }

        show2(x,y,z)
        {
                z=x-y;
                document.write(z+"<br>");

        }

        show3(x,y,z)
        {
                z=x/y;
                document.write(z+"<br>");

        }

        show4(x,y,z)
        {
                z=x*y;
                document.write(z+"<br>");

        }

}
let a1 = new A();
a1.show1(20,30);
a1.show2(20,30);
a1.show3(20,30);
a1.show4(20,30);