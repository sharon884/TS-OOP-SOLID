type c <T> = T extends string ? "yes" : "No";


type a = c<string>
type b = c<number>



