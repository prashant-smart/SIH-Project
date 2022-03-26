let table_container = document.getElementsByClassName("table_container")[0];
let table = document.createElement('table');
table_container.appendChild(table);

let table_row_2 = document.createElement('tr'); {
    let table_data_2 = document.createElement('th');
    table_data_2.innerHTML = "BRANCH NAME";
    table_row_2.appendChild(table_data_2);
} {
    let table_data_2 = document.createElement('th');
    table_data_2.innerHTML = "OC_BOYS";
    table_row_2.appendChild(table_data_2);
} {
    let table_data_2 = document.createElement('th');
    table_data_2.innerHTML = "OC_GIRLS";
    table_row_2.appendChild(table_data_2);
} {
    let table_data_2 = document.createElement('th');
    table_data_2.innerHTML = "BC_A_BOYS";
    table_row_2.appendChild(table_data_2);
} {
    let table_data_2 = document.createElement('th');
    table_data_2.innerHTML = "BC_A_GIRLS";
    table_row_2.appendChild(table_data_2);
} {
    let table_data_2 = document.createElement('th');
    table_data_2.innerHTML = "BC_B_BOYS";
    table_row_2.appendChild(table_data_2);
} {
    let table_data_2 = document.createElement('th');
    table_data_2.innerHTML = "BC_B_GIRLS";
    table_row_2.appendChild(table_data_2);
} {
    let table_data_2 = document.createElement('th');
    table_data_2.innerHTML = "BC_C_BOYS";
    table_row_2.appendChild(table_data_2);
} {
    let table_data_2 = document.createElement('th');
    table_data_2.innerHTML = "BC_C_GIRLS";
    table_row_2.appendChild(table_data_2);
} {
    let table_data_2 = document.createElement('th');
    table_data_2.innerHTML = "BC_D_BOYS";
    table_row_2.appendChild(table_data_2);
} {
    let table_data_2 = document.createElement('th');
    table_data_2.innerHTML = "BC_D_GIRLS";
    table_row_2.appendChild(table_data_2);
} {
    let table_data_2 = document.createElement('th');
    table_data_2.innerHTML = "BC_E_BOYS";
    table_row_2.appendChild(table_data_2);
} {
    let table_data_2 = document.createElement('th');
    table_data_2.innerHTML = "BC_E_GIRLS";
    table_row_2.appendChild(table_data_2);
} {
    let table_data_2 = document.createElement('th');
    table_data_2.innerHTML = "SC_BOYS";
    table_row_2.appendChild(table_data_2);
} {
    let table_data_2 = document.createElement('th');
    table_data_2.innerHTML = "SC_GIRLS";
    table_row_2.appendChild(table_data_2);
} {
    let table_data_2 = document.createElement('th');
    table_data_2.innerHTML = "ST_BOYS";
    table_row_2.appendChild(table_data_2);
}
table.appendChild(table_row_2);

colleges_cutoff.forEach(element => {
    let table_row_1 = document.createElement('tr');
    let bold_1 = document.createElement('strong');
    bold_1.innerHTML = element.college_name;
    table.appendChild(bold_1);



    element.branches.forEach((ele2, index) => {
        let table_row = document.createElement('tr');

        //data
        {
            let table_data = document.createElement('td');
            table_data.innerHTML = Number(index + 1) + ') ' + ele2.branch_name;
            table_row.appendChild(table_data);
        } {
            let table_data = document.createElement('td');
            table_data.innerHTML = ele2.cut_off.OC_BOYS;
            table_row.appendChild(table_data);
        } {
            let table_data = document.createElement('td');
            table_data.innerHTML = ele2.cut_off.OC_GIRLS;
            table_row.appendChild(table_data);
        } {
            let table_data = document.createElement('td');
            table_data.innerHTML = ele2.cut_off.BC_A_BOYS;
            table_row.appendChild(table_data);
        } {
            let table_data = document.createElement('td');
            table_data.innerHTML = ele2.cut_off.BC_A_GIRLS;
            table_row.appendChild(table_data);
        } {
            let table_data = document.createElement('td');
            table_data.innerHTML = ele2.cut_off.BC_B_BOYS;
            table_row.appendChild(table_data);
        } {
            let table_data = document.createElement('td');
            table_data.innerHTML = ele2.cut_off.BC_B_GIRLS;
            table_row.appendChild(table_data);
        } {
            let table_data = document.createElement('td');
            table_data.innerHTML = ele2.cut_off.BC_C_BOYS;
            table_row.appendChild(table_data);
        } {
            let table_data = document.createElement('td');
            table_data.innerHTML = ele2.cut_off.BC_C_GIRLS;
            table_row.appendChild(table_data);
        } {
            let table_data = document.createElement('td');
            table_data.innerHTML = ele2.cut_off.BC_D_BOYS;
            table_row.appendChild(table_data);
        } {
            let table_data = document.createElement('td');
            table_data.innerHTML = ele2.cut_off.BC_D_GIRLS;
            table_row.appendChild(table_data);
        } {
            let table_data = document.createElement('td');
            table_data.innerHTML = ele2.cut_off.BC_E_BOYS;
            table_row.appendChild(table_data);
        } {
            let table_data = document.createElement('td');
            table_data.innerHTML = ele2.cut_off.BC_E_GIRLS;
            table_row.appendChild(table_data);
        } {
            let table_data = document.createElement('td');
            table_data.innerHTML = ele2.cut_off.SC_BOYS;
            table_row.appendChild(table_data);
        } {
            let table_data = document.createElement('td');
            table_data.innerHTML = ele2.cut_off.SC_GIRLS;
            table_row.appendChild(table_data);
        } {
            let table_data = document.createElement('td');
            table_data.innerHTML = ele2.cut_off.ST_BOYS;
            table_row.appendChild(table_data);
        }

        table.appendChild(table_row);
    });
});