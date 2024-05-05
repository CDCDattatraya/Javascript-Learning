const c = 2;
// lexical scope means nested block
{
        const c = 4;    // Value of c is 4 for this block only
        console.log(c);
        {
                const c = 6; // Value of c is 6 for this block only
                console.log(c);

        }
}

console.log(c);