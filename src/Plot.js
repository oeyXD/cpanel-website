import downloadKmlFile from './create-kml-file'; import React, { useState } from 'react'
let num = 1;



//<input type="text" value={Dir1st} onChange={(event) => onValUpdate(index, event)}
//                    name="Dir1st" className="form-control" />

function TableRows({ rows, tableRowRemove, onValUpdate }) {
    return rows.map((rowsData, index) => {
        const { Dir1st, Deg, Min, Dir2nd, Dist } = rowsData;
        return (
            <tr key={index}>
                <td>Point {count} to {count + 1}</td>
                <td class="Dir1stclass">
                    <select class={"Dir1st" + count} >
                        <option value={"card1"} selected={true} disabled="disabled" >N or S</option>
                        <option value={"north"}>North (N)</option>
                        <option value={"south"}>South (S)</option>
                    </select>
                </td>
                <td class="Degclass"><input type="number" id={"Deg" + count} value={Deg} onChange={(event) => onValUpdate(index, event)}
                    name="Deg" className={"form-control deg" + count} placeholder="Enter Degree/s" />
                </td>
                <td class="Minclass"><input type="number" value={Min} onChange={(event) => onValUpdate(index, event)}
                    name="Min" className={"form-control min" + count} placeholder="Enter Minute/s" />
                </td>
                <td class="Dir2ndclass">
                    <select class={"Dir2nd" + count} >
                        <option value={"card2"} selected={true} disabled="disabled">E or W</option>
                        <option value={"east"}>East (E)</option>
                        <option value={"west"}>West (W)</option>
                    </select>
                </td>
                <td class="Distclass"><input type="number" value={Dist} onChange={(event) => onValUpdate(index, event)}
                    name="Dist" className={"form-control dist" + count} placeholder="Enter Distance" />m
                </td>
                <td><button className="btn btn-dark" onClick={() => tableRowRemove(index)} >
                    Delete Row </button>
                </td>

            </tr>

        );
    });
}
export let count = 0; console.log(count); let origLat, origLong, fileName;
function Plot() {
    const [rows, initRow] = useState([]);
    const addRowTable = () => {
        const data = { Dir1st: "", Deg: "", Min: "", Dir2nd: "", Dist: "" };
        initRow([...rows, data]); count += 1;
    };
    const tableRowRemove = (index) => {
        const dataRow = [...rows];
        dataRow.splice(index, 1); initRow(dataRow);
        count -= 1;

    };
    const onValUpdate = (i, event) => {
        const { name, value } = event.target; const data = [...rows]; data[i][name] = value; initRow(data);
    };

    return (
        <div>
            <input type="number" id="origLatId" value={origLat} name="origLat" placeholder="Enter Latitude" />
            <input type="number" id="origLongId" value={origLong} name="origLong" placeholder="Enter Longitude" />
            <table className="table table-striped">
                <thead><tr>
                    <th>No.</th><th>Dir1</th><th>Deg</th><th>Min</th><th>Dir2</th><th>Distance (meters, m, mtrs.)</th>
                    <th><button className="btn btn-danger" onClick={addRowTable} >Insert Row</button>
                    </th>
                </tr></thead>
                <tbody>

                    <TableRows rows={rows} tableRowRemove={tableRowRemove} onValUpdate={onValUpdate}
                    />
                </tbody>
            </table>

            <input id="fileNameId" value={fileName} name="fileName" placeholder="Enter File Name" />
            <button primary onClick={downloadKmlFile} >Download</button>
        </div>
    )
}

/*
<td>Point {num} to {num * 2}</td>
                        <td><select><option disabled selected value>Direction</option>
                            <option value="north">N</option><option value="south">S</option></select>
                        </td>
                        <td><input placeholder='Degrees' /></td><td><input placeholder='Minutes' /></td>
                        <td><input placeholder='Seconds' /></td>
                        <td><select><option disabled selected value>Direction</option>
                            <option value="east">E</option><option value="west">W</option></select>
                        </td>
                        <td><input placeholder='Distance' /></td>
*/
export default Plot;
