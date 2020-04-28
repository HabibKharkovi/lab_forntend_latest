// patient id generator
export const mr_no_generator = () => {
    const date = new Date();
    const year = date.getFullYear().toString().substr(2, 2);
    const day = date.getDate();

    // check month to two digits
    const month_index =  date.getMonth() + 1;
    let check_month = "0" + month_index;
    if(check_month.length === 3) {
        check_month = date.getMonth() + 1;
    }
    const month = check_month;
    let auto_no = Math.random().toString(9).substr(4, 4);

    return  `${year}${month}-${day}-${auto_no}`;
}