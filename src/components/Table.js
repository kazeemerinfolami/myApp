import React from "react";

function Table({ allCoreSectors }) {
  console.log({ allCoreSectors });

  return (
    <div className="table--body content-page-con">
      <table className="table_container">
        <tr className="table--body">
          <th>Client interactions records</th>
        </tr>
        <div className="table-content_container">
          <tr className="table_container">
            <td className="table-title">Sectors</td>
            {[...new Set(allCoreSectors.map((item) => item.name))].map(
              (elem) => (
                <td>{elem}</td>
              )
            )}
          </tr>
          <tr className="table_container">
            <td className="table-title">No of interaction</td>
            {[...new Set(allCoreSectors.map((item) => item.name))].map(
              (elem) => {
                const th = allCoreSectors.filter((elem) => elem.name === elem);
                return <td>{th.map((elem) => elem.date).length}</td>;
              }
            )}
          </tr>
        </div>
      </table>
    </div>
  );
}

export default Table;
