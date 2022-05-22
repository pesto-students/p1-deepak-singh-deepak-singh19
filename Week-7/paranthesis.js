const pChecker = (s) => {

    const st = [];

    const paranth = new Map(
        [

            ['(', ')'],
            ['{', '}'],
            ['[', ']']
        ]
    );

    for (let i = 0; i < s.length; i++) {

        if (s[i] == '{' || s[i] == '[' || s[i] == '(') {

            st.push(s[i]);
        } else if (paranth[st.pop() != s[i]]) {

            return false;
        }
    }

    return st.length == 0;




}

// const check = new pChecker('{([])}');

console.log(pChecker('{([])}'));