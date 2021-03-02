/*


intervals
interval is a tuple - start && finish
sort by finish time
eliminate all intervals that collide
get the next finished interval


get points for scheduling 
maximize points in terms of weight
big


100, 200 , 20

2 questions no/yes

no: opt(n-1);
yes: Wn + P(n) - most recent non-colliding

if a subproblem wins we just need to record and then backtrack

                    opt(3)
                  /         \
                /            \
            opt(2)          20 + opt(2)
            /   \                   /  \
           /     \              opt(1)  200 + opt(0);
        opt(1)  200+opt(0)
        /  \
    opt(0) 100+0

                opt(3)
                /  \
            200    220
    -- memoization

    T(n) = T(n-1) + T(p(n))
    o(n) in memoization
*/